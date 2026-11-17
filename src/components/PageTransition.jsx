import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas-pro";

const DEBUG = true;            // set to false once you've confirmed it works
const TILE_SIZE = 140;         // approx tile size in px (smaller = more pieces)
const SPREAD_DELAY = 350;      // ms between first and last tile breaking
const FALL_DURATION = 900;     // ms base fall time
const SNAPSHOT_TIMEOUT = 3000; // give up and navigate normally after this

const log = (...args) => DEBUG && console.log("[PageTransition]", ...args);

async function takeSnapshot(vw, vh) {
  const canvas = await html2canvas(document.body, {
    x: window.scrollX,
    y: window.scrollY,
    width: vw,
    height: vh,
    scale: 1,
    useCORS: true,
    logging: false,
    backgroundColor: getComputedStyle(document.body).backgroundColor,
  });
  const blob = await new Promise((r) => canvas.toBlob(r, "image/jpeg", 0.85));
  const src = URL.createObjectURL(blob);
  const img = new Image();
  img.src = src;
  await img.decode();
  return src;
}

async function shatter(originX, originY, go) {
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  // 1. snapshot the visible part of the current page
  let src;
  try {
    src = await Promise.race([
      takeSnapshot(vw, vh),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("snapshot timed out")), SNAPSHOT_TIMEOUT)
      ),
    ]);
    log("snapshot ok");
  } catch (err) {
    console.error("[PageTransition] snapshot failed:", err);
    go(); // fall back to a normal navigation
    return;
  }

  // 2. build the tile overlay
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    zIndex: "9999",
    pointerEvents: "none",
  });

  const cols = Math.max(4, Math.round(vw / TILE_SIZE));
  const rows = Math.max(4, Math.round(vh / TILE_SIZE));
  const tw = Math.ceil(vw / cols);
  const th = Math.ceil(vh / rows);

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
        width: `${tw}px`,
        height: `${th}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: `${vw}px ${vh}px`,
        backgroundPosition: `-${x}px -${y}px`,
        backgroundRepeat: "no-repeat",
        willChange: "transform, opacity",
      });
      overlay.appendChild(el);

      const dx = x + tw / 2 - originX;
      const dy = y + th / 2 - originY;
      const dist = Math.hypot(dx, dy) || 1;
      maxDist = Math.max(maxDist, dist);
      tiles.push({ el, dx, dy, dist });
    }
  }

  document.body.appendChild(overlay);

  // 3. swap the route underneath the overlay
  go();
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  // new page fades in slowly while the pieces fall away
  document.getElementById("root")?.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 900,
    delay: 250,
    easing: "ease-out",
    fill: "backwards",
  });

  // 4. explode the tiles outward from the click point
  const animations = tiles.map(({ el, dx, dy, dist }) => {
    const nx = dx / dist;
    const ny = dy / dist;
    const push = 150 + Math.random() * 350;
    const tx = nx * push + (Math.random() - 0.5) * 80;
    const ty = ny * push + 250 + Math.random() * 350; // gravity
    const rot = (Math.random() - 0.5) * 140;

    return el.animate(
      [
        { transform: "translate3d(0,0,0) rotate(0deg) scale(1)", opacity: 1 },
        { opacity: 1, offset: 0.5 },
        {
          transform: `translate3d(${tx}px,${ty}px,0) rotate(${rot}deg) scale(0.6)`,
          opacity: 0,
        },
      ],
      {
        duration: FALL_DURATION + Math.random() * 300,
        delay: (dist / maxDist) * SPREAD_DELAY + Math.random() * 80,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
        fill: "forwards",
      }
    ).finished;
  });

  await Promise.all(animations);
  overlay.remove();
  URL.revokeObjectURL(src);
  log("done");
}

const PageTransition = () => {
  const navigate = useNavigate();
  const busy = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = async (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = e.target.closest?.("a[href]");
      if (!a) return;
      log("link click:", a.href);

      if (a.hasAttribute("data-no-shatter")) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;     // external link
      if (url.pathname === window.location.pathname) return; // same page / hash link
      if (reduceMotion.matches) {
        log("reduced motion is ON, skipping");
        return;
      }

      // take over this navigation
      e.preventDefault();
      e.stopPropagation();
      if (busy.current) return;
      busy.current = true;

      const to = url.pathname + url.search + url.hash;
      const ox = e.clientX || document.documentElement.clientWidth / 2;
      const oy = e.clientY || document.documentElement.clientHeight / 2;

      try {
        await shatter(ox, oy, () => navigate(to));
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

export default PageTransition;