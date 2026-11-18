import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const RED = 0xd42027, CHAR = 0x1a1d1f, GREY = 0xedf0f1, WHITE = 0xffffff;
const DURATION = 10;
const TAU = Math.PI * 2;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const DigitalMarketingVisual = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const wrap = mountRef.current;
    if (!wrap) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0.2, 25);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb8bec2, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(-5, 8, 10);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffd9da, 0.8);
    rim.position.set(7, 2, -6);
    scene.add(rim);

    const root = new THREE.Group();
    scene.add(root);

    const mat = (color, o = {}) =>
      new THREE.MeshPhysicalMaterial({
        color, roughness: 0.3, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.9, ...o,
      });
    const redMat = mat(RED, { roughness: 0.25, emissive: 0x3a0305 });
    const charMat = mat(CHAR, { roughness: 0.32 });
    const whiteMat = mat(WHITE, { roughness: 0.38 });
    const greyMat = mat(GREY, { roughness: 0.45, clearcoat: 0.5 });
    const glowMat = (opacity = 1) => new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity });
    const sphere = (r, m) => new THREE.Mesh(new THREE.SphereGeometry(r, 36, 28), m);
    const rbox = (w, h, d, m, r = 0.1) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), m);

    // Shared heart geometry
    const hs = new THREE.Shape();
    hs.moveTo(0.25, 0.25);
    hs.bezierCurveTo(0.25, 0.25, 0.2, 0, 0, 0);
    hs.bezierCurveTo(-0.3, 0, -0.3, 0.35, -0.3, 0.35);
    hs.bezierCurveTo(-0.3, 0.55, -0.1, 0.77, 0.25, 0.95);
    hs.bezierCurveTo(0.6, 0.77, 0.8, 0.55, 0.8, 0.35);
    hs.bezierCurveTo(0.8, 0.35, 0.8, 0, 0.5, 0);
    hs.bezierCurveTo(0.35, 0, 0.25, 0.25, 0.25, 0.25);
    const heartGeo = new THREE.ExtrudeGeometry(hs, { depth: 0.25, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 5, curveSegments: 24 });
    heartGeo.rotateZ(Math.PI);
    heartGeo.center();

    /* ---------- Signal ripples (behind the phone) ---------- */
    const ripples = [0, 1, 2].map(() => {
      const m = glowMat(0);
      const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.018, 12, 128), m);
      r.position.z = -1.2;
      root.add(r);
      return { r, m };
    });

    /* ---------- Smartphone ---------- */
    const phone = new THREE.Group();
    root.add(phone);
    phone.add(rbox(2.3, 4.4, 0.3, charMat, 0.28));
    const screen = rbox(2.0, 4.1, 0.05, greyMat, 0.2);
    screen.position.z = 0.16;
    phone.add(screen);
    const notch = rbox(0.6, 0.1, 0.06, charMat, 0.04);
    notch.position.set(0, 1.9, 0.21);
    phone.add(notch);

    const layers = [];
    const layer = (w, h, m, x, y, delay, kids = []) => {
      const g = rbox(w, h, 0.1, m, 0.1);
      g.position.set(x, y, 0.22);
      kids.forEach((k) => g.add(k));
      phone.add(g);
      layers.push({ g, delay });
      return g;
    };
    const bar = (w, x, y, m = greyMat) => {
      const b = rbox(w, 0.1, 0.06, m, 0.03);
      b.position.set(x, y, 0.08);
      return b;
    };
    layer(1.7, 0.34, redMat, 0, 1.45, 0);
    const hero = sphere(0.28, redMat);
    hero.position.set(0, 0, 0.17);
    layer(1.7, 1.2, whiteMat, 0, 0.5, 0.06, [hero, bar(1.1, 0, -0.45), bar(0.7, -0.2, -0.28)]);
    layer(0.8, 0.8, whiteMat, -0.45, -0.75, 0.12, [bar(0.5, 0, 0.15, redMat), bar(0.5, 0, -0.05), bar(0.35, -0.07, -0.2)]);
    layer(0.8, 0.8, whiteMat, 0.45, -0.75, 0.18, [bar(0.5, 0, 0.15), bar(0.5, 0, -0.05, redMat), bar(0.35, -0.07, -0.2)]);
    layer(1.4, 0.36, redMat, 0, -1.6, 0.24, [bar(0.6, 0, 0, whiteMat)]);

    const badge = sphere(0.24, redMat);
    badge.position.set(1.12, 2.05, 0.3);
    phone.add(badge);

    /* ---------- Orbit ring ---------- */
    const orbit = new THREE.Group();
    orbit.rotation.set(0.45, 0, -0.12);
    orbit.position.y = -0.2;
    root.add(orbit);
    const RX = 4.5, RZ = 3.1;
    const path = new THREE.Mesh(new THREE.TorusGeometry(1, 0.01, 8, 160), greyMat);
    path.scale.set(RX, RZ, 1);
    path.rotation.x = Math.PI / 2;
    orbit.add(path);
    const pulseM = glowMat();
    const pulseDot = sphere(0.12, pulseM);
    orbit.add(pulseDot);
    const orbitDots = [0, 1, 2].map((i) => {
      const d = sphere(0.07, i === 1 ? redMat : charMat);
      orbit.add(d);
      return d;
    });

    /* ---------- Channel icons ---------- */
    const icons = [];
    const addIcon = (g) => { orbit.add(g); icons.push(g); return g; };

    // chat
    const chat = new THREE.Group();
    chat.add(rbox(1.5, 1.0, 0.25, whiteMat, 0.2));
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.35, 3), whiteMat);
    tail.rotation.z = Math.PI;
    tail.position.set(-0.45, -0.65, 0);
    chat.add(tail);
    [-0.35, 0, 0.35].forEach((x, i) => {
      const d = sphere(0.09, i === 1 ? redMat : charMat);
      d.position.set(x, 0, 0.15);
      chat.add(d);
    });
    addIcon(chat);

    // heart
    const heart = new THREE.Mesh(heartGeo, redMat);
    heart.scale.setScalar(1.1);
    addIcon(heart);

    // mail
    const mail = new THREE.Group();
    mail.add(rbox(1.4, 0.95, 0.2, whiteMat, 0.08));
    [-1, 1].forEach((s) => {
      const f = rbox(0.85, 0.07, 0.06, redMat, 0.03);
      f.position.set(s * 0.3, 0.15, 0.12);
      f.rotation.z = -s * 0.55;
      mail.add(f);
    });
    addIcon(mail);

    // search
    const search = new THREE.Group();
    search.add(new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.08, 20, 48), charMat));
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.06, 40), mat(WHITE, { transparent: true, opacity: 0.35, roughness: 0.05 }));
    lens.rotation.x = Math.PI / 2;
    search.add(lens);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.65, 20), redMat);
    handle.position.set(0.5, -0.5, 0);
    handle.rotation.z = Math.PI / 4;
    search.add(handle);
    addIcon(search);

    // play
    const play = new THREE.Group();
    play.add(rbox(1.4, 1.0, 0.25, redMat, 0.22));
    const triWrap = new THREE.Group();
    const tri = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.12, 3), whiteMat);
    tri.rotation.x = Math.PI / 2;
    triWrap.add(tri);
    triWrap.rotation.z = Math.PI / 2;
    triWrap.position.z = 0.14;
    play.add(triWrap);
    addIcon(play);

    /* ---------- Rising hearts (engagement) ---------- */
    const floaters = [0, 1, 2, 3].map((i) => {
      const m = glowMat(0);
      const h = new THREE.Mesh(heartGeo, m);
      h.scale.setScalar(0.22);
      root.add(h);
      return { h, m, i };
    });

    /* ---------- Pointer parallax ---------- */
    const tgt = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tgt.y = ((e.clientX - r.left) / r.width - 0.5) * 0.4;
      tgt.x = ((e.clientY - r.top) / r.height - 0.5) * 0.2;
    };
    const onLeave = () => { tgt.x = 0; tgt.y = 0; };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    let raf;
    const frame = (ms) => {
      const time = reduceMotion ? DURATION * 0.55 * 1000 : ms;
      const u = ((time / 1000) % DURATION) / DURATION;
      const a = u * TAU;
      const out = 1 - smooth(0.88, 1, u);

      root.rotation.x += (tgt.x - root.rotation.x) * 0.05;
      root.rotation.y += (tgt.y - root.rotation.y) * 0.05;

      // Phone floats; UI layers pop out in sequence then settle
      phone.position.y = 0.15 * Math.sin(a);
      phone.rotation.set(0.08, -0.4 + 0.22 * Math.sin(a), 0.05 * Math.sin(a + 1));
      layers.forEach(({ g, delay }) => {
        const p = smooth(0.12 + delay, 0.32 + delay, u) * out;
        g.position.z = 0.22 + p * 0.55;
        g.scale.setScalar(0.96 + 0.04 * p);
      });
      const bp = 1 + 0.18 * Math.sin(a * 4);
      badge.scale.setScalar(smooth(0.3, 0.4, u) * out * bp + 0.0001);

      // Ripples
      ripples.forEach(({ r, m }, i) => {
        const t = (u * 2 + i / 3) % 1;
        r.scale.setScalar(2.2 + t * 3.2);
        m.opacity = Math.sin(Math.PI * t) * 0.45;
      });

      // Orbit
      icons.forEach((g, i) => {
        const th = a + (i * TAU) / icons.length;
        const front = Math.sin(th);
        g.position.set(Math.cos(th) * RX, 0.25 * Math.sin(a * 2 + i), front * RZ);
        g.rotation.y = 0.4 * Math.cos(th);
        g.rotation.z = 0.06 * Math.sin(a + i);
        g.scale.setScalar(0.85 + 0.2 * front);
      });
      pulseDot.position.set(Math.cos(-a * 2) * RX, 0, Math.sin(-a * 2) * RZ);
      orbitDots.forEach((d, i) => {
        const th = -a + (i * TAU) / 3 + 0.6;
        d.position.set(Math.cos(th) * RX, 0, Math.sin(th) * RZ);
      });
      heart.rotation.y = a * 2;

      // Rising hearts
      floaters.forEach(({ h, m, i }) => {
        const t = (u * 2 + i / 4) % 1;
        h.position.set(1.7 + 0.35 * Math.sin(i * 2 + t * 5), -1.4 + t * 4.4, 1.2);
        h.rotation.z = 0.25 * Math.sin(t * 6 + i);
        m.opacity = Math.sin(Math.PI * t) * 0.9;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    const resize = () => {
      const size = wrap.clientWidth;
      if (!size) return;
      renderer.setSize(size, size, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      scene.traverse((o) => {
        o.geometry?.dispose();
        const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
        ms.forEach((m) => m.dispose());
      });
      heartGeo.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="aspect-square w-full max-w-[560px]"
      role="img"
      aria-label="Animated 3D illustration of digital marketing: a smartphone surrounded by orbiting social, email, search and video channel icons"
    />
  );
};

export default DigitalMarketingVisual;