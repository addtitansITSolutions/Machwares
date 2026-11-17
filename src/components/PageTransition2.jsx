import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas-pro";

/* ───────────────────────── CONFIG ───────────────────────── */
const EFFECT = "doors";        // "flip" | "doors" | "burst" | "random"
const BRAND_1 = "#D42027";      // gradient on the back of flipped tiles
const BRAND_2 = "#edf0f1";
const SNAPSHOT_SCALE = 1;       // 2 = sharper on retina screens, but slower
const SNAPSHOT_TIMEOUT = 3000;  // give up and navigate normally after this
const DEBUG = false;

const FX = {
  flip:  { tile: 150, perspective: 1400, spread: 450 },
  doors: { tile: 90,  perspective: 1600, spread: 500 },
  burst: { tile: 130, perspective: 1200, spread: 350 },
};

const rand = (a, b) => a + Math.random() * (b - a);
const log = (...args) => DEBUG && console.log("[PageTransition]", ...args);

/* ───────────────────────── SNAPSHOT ───────────────────────── */
async function takeSnapshot(vw, vh) {
  const canvas = await html2canvas(document.body, {
    x: window.scrollX,
    y: window.scrollY,
    width: vw,
    height: vh,
    scale: SNAPSHOT_SCALE,
    useCORS: true,
    logging: false,
    backgroundColor: getComputedStyle(document.body).backgroundColor,
  });
  const blob = await new Promise((r) => canvas.toBlob(r, "image/jpeg", 0.88));
  const src = URL.createObjectURL(blob);
  const img = new Image();
  img.src = src;
  await img.decode();
  return src;
}

/* ───────────────────────── OVERLAY ───────────────────────── */
function buildOverlay(fx, src, vw, vh, ox, oy) {
  const cfg = FX[fx];
  const doors = fx === "doors";

  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    zIndex: "9999",
    pointerEvents: "none",
    perspective: `${cfg.perspective}px`,
    perspectiveOrigin: fx === "burst" ? `${ox}px ${oy}px` : "50% 50%",
  });

  const cols = Math.max(doors ? 6 : 4, Math.round(vw / cfg.tile));
  const rows = doors ? 1 : Math.max(4, Math.round(vh / cfg.tile));
  const tw = Math.ceil(vw / cols);
  const th = Math.ceil(vh / rows);

  // one face of a tile; background is positioned in page coordinates
  // so all tiles together form one continuous image
  const makeFace = (x, y, style) => {
    const f = document.createElement("div");
    Object.assign(f.style, {
      position: "absolute",
      inset: "0",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      backgroundSize: `${vw}px ${vh}px`,
      backgroundPosition: `-${x}px -${y}px`,
      backgroundRepeat: "no-repeat",
      ...style,
    });
    return f;
  };

  const makeShade = () => {
    const s = document.createElement("div");
    Object.assign(s.style, {
      position: "absolute",
      inset: "0",
      background: "#000",
      opacity: "0",
      pointerEvents: "none",
    });
    return s;
  };

  const tiles = [];
  let maxDist = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * tw;
      const y = r * th;

      const el = document.createElement("div");
      Object.assign(el.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${tw + 1}px`,  // 1px overscan hides seams between tiles
        height: `${th + 1}px`,
        transformStyle: "preserve-3d",
        transformOrigin: doors ? "0% 50%" : "50% 50%", // doors hinge on the left edge
        willChange: "transform",
      });

      const front = makeFace(x, y, { backgroundImage: `url(${src})` });
      const frontShade = makeShade();
      front.appendChild(frontShade);
      el.appendChild(front);

      let backShade = null;
      if (!doors) {
        const back = makeFace(x, y, {
          backgroundImage: `linear-gradient(135deg, ${BRAND_1}, ${BRAND_2})`,
          transform: "rotateY(180deg)",
        });
        backShade = makeShade();
        back.appendChild(backShade);
        el.appendChild(back);
      }

      overlay.appendChild(el);

      const dx = x + tw / 2 - ox;
      const dy = y + th / 2 - oy;
      const dist = (doors ? Math.abs(dx) : Math.hypot(dx, dy)) || 1;
      maxDist = Math.max(maxDist, dist);
      tiles.push({ el, frontShade, backShade, dx, dy, dist });
    }
  }

  return { overlay, tiles, maxDist, cfg };
}

/* ───────────────────────── ANIMATIONS ───────────────────────── */
function animateTile(fx, t, cfg, maxDist) {
  const delay =
    (t.dist / maxDist) * cfg.spread + (fx === "doors" ? 0 : rand(0, 60));
  const opts = (duration, easing = "linear") => ({
    duration,
    delay,
    easing,
    fill: "forwards",
  });

  /* FLIP: card flip wave, pops toward camera, lands on purple, then collapses */
  if (fx === "flip") {
    const D = 1300;
    t.frontShade.animate(
      [
        { opacity: 0, offset: 0 },
        { opacity: 0.6, offset: 0.3 },
        { opacity: 0.6, offset: 1 },
      ],
      opts(D)
    );
    t.backShade.animate(
      [
        { opacity: 0.6, offset: 0 },
        { opacity: 0.6, offset: 0.3 },
        { opacity: 0, offset: 0.6 },
        { opacity: 0, offset: 1 },
      ],
      opts(D)
    );
    return t.el.animate(
      [
        { transform: "translateZ(0px) rotateY(0deg) scale(1)", offset: 0, easing: "ease-in" },
        { transform: "translateZ(160px) rotateY(90deg) scale(1)", offset: 0.3, easing: "ease-out" },
        { transform: "translateZ(0px) rotateY(180deg) scale(1)", offset: 0.6, easing: "ease-in" },
        { transform: "translateZ(0px) rotateY(180deg) scale(0)", offset: 1 },
      ],
      opts(D)
    ).finished;
  }

  /* DOORS: vertical panels swing open like 3D shutters */
  if (fx === "doors") {
    const D = 1000;
    const ease = "cubic-bezier(.6,0,.3,1)";
    t.frontShade.animate([{ opacity: 0 }, { opacity: 0.85 }], opts(D, ease));
    return t.el.animate(
      [{ transform: "rotateY(0deg)" }, { transform: "rotateY(100deg)" }],
      opts(D, ease)
    ).finished;
  }

  /* BURST: shards tumble toward the camera in 3D */
  const push = rand(200, 600);
  const tx = (t.dx / t.dist) * push;
  const ty = (t.dy / t.dist) * push;
  const tz = rand(150, 650);
  return t.el.animate(
    [
      {
        transform: "translate3d(0px,0px,0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
        opacity: 1,
      },
      { opacity: 1, offset: 0.55 },
      {
        transform: `translate3d(${tx}px,${ty}px,${tz}px) rotateX(${rand(-220, 220)}deg) rotateY(${rand(-220, 220)}deg) rotateZ(${rand(-90, 90)}deg)`,
        opacity: 0,
      },
    ],
    opts(rand(1000, 1400), "cubic-bezier(.4,0,.9,.6)")
  ).finished;
}

/* ───────────────────────── MAIN SEQUENCE ───────────────────────── */
async function transition(ox, oy, go) {
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  const names = Object.keys(FX);
  const fx =
    EFFECT === "random" ? names[Math.floor(Math.random() * names.length)] : EFFECT;
  log("effect:", fx);

  // 1. snapshot the current page
  let src;
  try {
    src = await Promise.race([
      takeSnapshot(vw, vh),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("snapshot timed out")), SNAPSHOT_TIMEOUT)
      ),
    ]);
  } catch (err) {
    console.error("[PageTransition] snapshot failed:", err);
    go();
    return;
  }

  // 2. cover the page with the 3D tiles
  const { overlay, tiles, maxDist, cfg } = buildOverlay(fx, src, vw, vh, ox, oy);
  document.body.appendChild(overlay);

  // 3. swap the route underneath
  go();
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  // 4. play the effect
  await Promise.all(tiles.map((t) => animateTile(fx, t, cfg, maxDist)));

  overlay.remove();
  URL.revokeObjectURL(src);
  log("done");
}

/* ───────────────────────── COMPONENT ───────────────────────── */
const PageTransition2 = () => {
  const navigate = useNavigate();
  const busy = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = async (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = e.target.closest?.("a[href]");
      if (!a) return;
      if (a.hasAttribute("data-no-shatter")) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;     // external link
      if (url.pathname === window.location.pathname) return; // same page / hash link
      if (reduceMotion.matches) return;                      // accessibility setting
      if (busy.current) return; // mid-transition: let the router navigate normally

      e.preventDefault();
      e.stopPropagation();
      busy.current = true;

      const to = url.pathname + url.search + url.hash;
      const ox = e.clientX || document.documentElement.clientWidth / 2;
      const oy = e.clientY || document.documentElement.clientHeight / 2;

      try {
        await transition(ox, oy, () => navigate(to));
      } finally {
        busy.current = false;
      }
    };

    // capture phase so we run before React Router's <Link> handler
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate]);

  return null;
};

export default PageTransition2;