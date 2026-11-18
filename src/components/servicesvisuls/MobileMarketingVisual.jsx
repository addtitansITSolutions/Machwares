import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const RED = 0xd42027, CHAR = 0x1a1d1f, GREY = 0xedf0f1, WHITE = 0xffffff;
const DURATION = 9;
const TAU = Math.PI * 2;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const MobileMarketingVisual = () => {
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

    /* ---------- Location pin (hero) ---------- */
    const pinWrap = new THREE.Group();
    pinWrap.position.set(0, 0.7, 0);
    root.add(pinWrap);
    const pin = new THREE.Group();
    pinWrap.add(pin);
    const head = sphere(1.1, redMat);
    head.position.y = 0.5;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.95, 1.9, 48), redMat);
    cone.rotation.z = Math.PI;
    cone.position.y = -0.95;
    const dome = sphere(0.45, whiteMat);
    dome.scale.z = 0.55;
    dome.position.set(0, 0.5, 0.95);
    pin.add(head, cone, dome);

    // Geo-targeting radar rings (base + extra set that only shows on hover)
    const makeRings = (n) =>
      Array.from({ length: n }, () => {
        const m = glowMat(0);
        const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 12, 128), m);
        r.rotation.x = Math.PI / 2 - 0.15;
        r.position.set(0, -1.2, 0);
        root.add(r);
        return { r, m };
      });
    const rings = makeRings(3);
    const hoverRings = makeRings(3);

    /* ---------- App icon + install badge (left) ---------- */
    const app = new THREE.Group();
    app.position.set(-4.3, 1.9, 0);
    root.add(app);
    app.add(rbox(2.1, 2.1, 0.45, charMat, 0.55));
    const glyphRing = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.1, 20, 64), whiteMat);
    glyphRing.position.z = 0.26;
    const glyphDot = sphere(0.25, redMat);
    glyphDot.position.z = 0.3;
    app.add(glyphRing, glyphDot);
    const dl = new THREE.Group();
    dl.position.set(0.85, -0.85, 0.5);
    dl.add(sphere(0.42, redMat));
    const dlShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.32, 16), whiteMat);
    dlShaft.position.set(0, 0.05, 0.36);
    const dlHead = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.2, 16), whiteMat);
    dlHead.rotation.z = Math.PI;
    dlHead.position.set(0, -0.15, 0.36);
    dl.add(dlShaft, dlHead);
    app.add(dl);

    /* ---------- Push notification cards (right) ---------- */
    const cards = [0, 1, 2].map((i) => {
      const g = new THREE.Group();
      const hi = i === 2;
      g.add(rbox(2.9, 0.88, 0.2, hi ? redMat : whiteMat, 0.2));
      const av = sphere(0.22, hi ? whiteMat : redMat);
      av.position.set(-1.05, 0, 0.15);
      const l1 = rbox(1.3, 0.1, 0.06, hi ? whiteMat : charMat, 0.03);
      l1.position.set(0.1, 0.15, 0.12);
      const l2 = rbox(0.9, 0.08, 0.05, hi ? whiteMat : greyMat, 0.03);
      l2.position.set(-0.1, -0.12, 0.12);
      g.add(av, l1, l2);
      root.add(g);
      return { g, y: 2.5 - i * 1.15, i };
    });

    /* ---------- Install-rate donut (bottom left) ---------- */
    const donut = new THREE.Group();
    donut.position.set(-3.9, -2.5, 0.3);
    root.add(donut);
    donut.add(new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.13, 20, 80), greyMat));
    const arcPts = Array.from({ length: 49 }, (_, k) => {
      const ang = Math.PI / 2 - (k / 48) * TAU * 0.78;
      return new THREE.Vector3(Math.cos(ang), Math.sin(ang), 0);
    });
    const arcGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(arcPts), 128, 0.17, 16, false);
    const arcTotal = arcGeo.index.count;
    donut.add(new THREE.Mesh(arcGeo, redMat));
    const donutCore = sphere(0.3, charMat);
    donut.add(donutCore);

    /* ---------- Star rating (bottom right) ---------- */
    const ss = new THREE.Shape();
    for (let k = 0; k < 10; k++) {
      const r = k % 2 ? 0.22 : 0.5;
      const ang = Math.PI / 2 + (k * Math.PI) / 5;
      k === 0 ? ss.moveTo(Math.cos(ang) * r, Math.sin(ang) * r) : ss.lineTo(Math.cos(ang) * r, Math.sin(ang) * r);
    }
    const starGeo = new THREE.ExtrudeGeometry(ss, { depth: 0.14, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 4 });
    starGeo.center();
    const grey = new THREE.Color(0xc9ced1), red = new THREE.Color(RED);
    const stars = [0, 1, 2, 3, 4].map((i) => {
      const m = mat(0xc9ced1, { roughness: 0.3 });
      const s = new THREE.Mesh(starGeo, m);
      s.position.set(2.2 + i * 0.78, -2.9, 0.3);
      root.add(s);
      return { s, m, i };
    });

    /* ---------- Hover burst sparks ---------- */
    const SP = 30;
    const sparks = Array.from({ length: SP }, (_, i) => {
      const m = glowMat(0);
      const s = sphere(0.07 + (i % 3) * 0.02, m);
      s.visible = false;
      root.add(s);
      const th = i * 2.399, ph = ((i * 0.37) % 1) * Math.PI - Math.PI / 2;
      const sp = 3 + (i % 5) * 0.8;
      return { s, m, v: new THREE.Vector3(Math.cos(th) * Math.cos(ph) * sp, Math.sin(ph) * sp * 0.8 + 0.8, Math.sin(th) * Math.cos(ph) * sp * 0.6 + 1) };
    });
    let burstStart = -1e9;
    const burst = () => { burstStart = performance.now(); };

    /* ---------- Pointer + hover state ---------- */
    const ptr = { x: 0, y: 0 };
    let hovering = false, hv = 0, spin = 0;
    const onEnter = () => { hovering = true; burst(); };
    const onLeave = () => { hovering = false; ptr.x = 0; ptr.y = 0; };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      ptr.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ptr.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerdown", burst);

    let raf, last = 0;
    const frame = (ms) => {
      const dt = Math.min((ms - last) / 1000, 0.05);
      last = ms;
      const time = reduceMotion ? DURATION * 0.65 * 1000 : ms;
      const u = ((time / 1000) % DURATION) / DURATION;
      const a = u * TAU;
      const out = 1 - smooth(0.88, 1, u);

      // hover blend + camera / light / scene response
      hv += ((hovering ? 1 : 0) - hv) * Math.min(1, dt * 6);
      camera.position.z = 25 - 1.8 * hv;
      camera.lookAt(0, 0, 0);
      root.scale.setScalar(1 + 0.04 * hv);
      root.rotation.x += (ptr.y * 0.22 - root.rotation.x) * 0.07;
      root.rotation.y += (ptr.x * 0.4 - root.rotation.y) * 0.07;
      key.intensity = 1 + 0.7 * hv;
      rim.intensity = 0.8 + 0.8 * hv;
      redMat.emissiveIntensity = 1 + 1.6 * hv;

      // Pin: sways, spins faster on hover, then settles to a whole turn
      if (hovering) spin += dt * 5 * hv;
      else spin += (Math.round(spin / TAU) * TAU - spin) * Math.min(1, dt * 4);
      pinWrap.position.y = 0.7 + 0.14 * Math.sin(a * 2) + 0.2 * hv;
      pin.rotation.y = 0.35 * Math.sin(a) + spin + ptr.x * 0.5 * hv;
      pin.rotation.x = ptr.y * 0.3 * hv;
      pin.scale.setScalar(1 + 0.12 * hv);

      rings.forEach(({ r, m }, i) => {
        const t = (u * 2 + i / 3) % 1;
        r.scale.setScalar(1.2 + t * 3.3);
        m.opacity = Math.sin(Math.PI * t) * 0.5;
      });
      hoverRings.forEach(({ r, m }, i) => {
        const t = (u * 6 + i / 3) % 1;
        r.scale.setScalar(1 + t * 4);
        m.opacity = Math.sin(Math.PI * t) * 0.6 * hv;
      });

      // App icon
      app.position.y = 1.9 + 0.12 * Math.sin(a + 1) + 0.25 * hv;
      app.rotation.y = 0.35 + 0.15 * Math.sin(a) + ptr.x * 0.4 * hv;
      app.rotation.x = -0.1 + ptr.y * 0.3 * hv;
      app.scale.setScalar(1 + 0.1 * hv);
      const dlp = smooth(0.15, 0.3, u) * out;
      dl.scale.setScalar(Math.max(dlp * (1 + 0.12 * Math.sin(a * 4)), 0.0001));
      dl.position.z = 0.5 + 0.35 * hv;
      glyphRing.rotation.z = -a;

      // Notification cards slide in, hover pops them toward the viewer
      cards.forEach(({ g, y, i }) => {
        const p = smooth(0.1 + i * 0.1, 0.3 + i * 0.1, u) * out;
        g.position.set(4.1 + 3.2 * (1 - p) - 0.2 * hv, y + 0.06 * Math.sin(a + i * 1.5), 0.2 + hv * (0.5 + i * 0.4));
        g.scale.setScalar(Math.max(0.5 + 0.5 * p, 0.0001));
        g.rotation.y = -0.3 + 0.1 * Math.sin(a + i) - hv * 0.2 + ptr.x * 0.15 * hv;
      });

      // Donut fills (fully on hover feel via bump)
      const dp = smooth(0.2, 0.65, u) * out;
      arcGeo.setDrawRange(0, Math.floor((arcTotal * Math.min(1, dp)) / 3) * 3);
      donut.rotation.y = 0.25 * Math.sin(a) + ptr.x * 0.4 * hv;
      donut.position.y = -2.5 + 0.1 * Math.sin(a + 2);
      donut.scale.setScalar(1 + 0.12 * hv);
      donutCore.scale.setScalar(1 + 0.2 * Math.sin(a * 3) * dp);

      // Stars light up one by one; on hover they flash and bounce
      stars.forEach(({ s, m, i }) => {
        const on = smooth(0.45 + i * 0.07, 0.5 + i * 0.07, u) * out;
        m.color.copy(grey).lerp(red, on);
        m.emissive.setHex(0x3a0305).multiplyScalar(on);
        const bounce = hv * 0.18 * Math.sin(ms * 0.008 - i * 0.7);
        s.position.y = -2.9 + bounce + 0.06 * Math.sin(a + i);
        s.scale.setScalar(1 + 0.25 * on * Math.max(0, Math.sin(Math.PI * smooth(0.45 + i * 0.07, 0.6 + i * 0.07, u))) + 0.1 * hv);
        s.rotation.y = a + i * 0.6 < 0 ? 0 : 0.5 * Math.sin(a + i) + hv * 0.5 * Math.sin(ms * 0.004 + i);
      });

      // Sparks
      const e = (performance.now() - burstStart) / 1300;
      sparks.forEach(({ s, m, v }) => {
        if (e < 0 || e >= 1) { s.visible = false; return; }
        s.visible = true;
        const k = 1 - Math.pow(1 - e, 2);
        s.position.set(v.x * k * 0.9, 0.9 + v.y * k * 0.9, 0.8 + v.z * k * 0.6);
        m.opacity = 1 - e;
        s.scale.setScalar(1 - 0.5 * e);
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
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerdown", burst);
      scene.traverse((o) => {
        o.geometry?.dispose();
        const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
        ms.forEach((m) => m.dispose());
      });
      starGeo.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="aspect-square w-full max-w-[560px] cursor-pointer"
      role="img"
      aria-label="Animated 3D illustration of performance mobile marketing: location pin, app install, push notifications, install rate and ratings"
    />
  );
};

export default MobileMarketingVisual;