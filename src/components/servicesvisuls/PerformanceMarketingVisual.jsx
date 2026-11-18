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
// radius of the funnel at height y
const funnelR = (y) => (y > -0.6 ? 0.55 + ((y + 0.6) / 3.4) * 1.85 : 0.5);

const PerformanceMarketingVisual = () => {
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
    camera.lookAt(0, 0.1, 0);

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
    const sphere = (r, m) => new THREE.Mesh(new THREE.SphereGeometry(r, 40, 30), m);
    const rbox = (w, h, d, m, r = 0.1) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), m);

    /* ---------- Conversion funnel (glass) ---------- */
    const funnel = new THREE.Group();
    funnel.position.set(0, 0.6, 0);
    root.add(funnel);
    const profile = [new THREE.Vector2(2.4, 2.8), new THREE.Vector2(0.55, -0.6), new THREE.Vector2(0.5, -1.6)];
    const glass = new THREE.Mesh(
      new THREE.LatheGeometry(profile, 64),
      mat(WHITE, { transparent: true, opacity: 0.22, roughness: 0.08, side: THREE.DoubleSide, depthWrite: false })
    );
    funnel.add(glass);
    const rings = [
      [2.8, 0.08, charMat], [1.5, 0.05, greyMat], [0.2, 0.05, greyMat], [-0.6, 0.07, redMat], [-1.6, 0.06, charMat],
    ].map(([y, t, m]) => {
      const r = new THREE.Mesh(new THREE.TorusGeometry(funnelR(y) + (y === 2.8 ? 0 : 0.0), t, 20, 96), m);
      r.rotation.x = Math.PI / 2;
      r.position.y = y;
      funnel.add(r);
      return r;
    });
    const conv = sphere(0.38, redMat); // finished conversion
    conv.position.set(0, -2.15, 0);
    funnel.add(conv);
    const convHalo = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.02, 12, 48), glowMat(0));
    convHalo.position.copy(conv.position);
    funnel.add(convHalo);

    const N = 16;
    const grey = new THREE.Color(0x9aa1a6), red = new THREE.Color(RED);
    const flow = Array.from({ length: N }, (_, i) => {
      const m = new THREE.MeshBasicMaterial({ color: grey, transparent: true, opacity: 0 });
      const p = sphere(0.1, m);
      funnel.add(p);
      return { p, m, i };
    });

    /* ---------- Target + dart ---------- */
    const target = new THREE.Group();
    target.position.set(-4.7, 1.4, 0.3);
    target.rotation.set(-0.1, 0.4, 0);
    root.add(target);
    [[1.4, WHITE, 0.2], [1.12, RED, 0.3], [0.82, WHITE, 0.4], [0.52, RED, 0.5], [0.22, WHITE, 0.6]].forEach(([r, c, h], i) => {
      const d = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 64), i % 2 ? redMat : whiteMat);
      d.rotation.x = Math.PI / 2;
      d.position.z = h / 2;
      target.add(d);
    });
    const tRim = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.09, 20, 80), charMat);
    tRim.position.z = 0.1;
    target.add(tRim);
    const dart = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16), charMat);
    shaft.position.y = -0.9;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.3, 16), charMat);
    dart.add(shaft, tip);
    [0, Math.PI / 2].forEach((ry) => {
      const fin = rbox(0.02, 0.45, 0.32, redMat, 0.01);
      fin.position.y = -1.55;
      fin.rotation.y = ry;
      dart.add(fin);
    });
    dart.rotation.x = -Math.PI / 2;
    target.add(dart);

    /* ---------- ROI gauge ---------- */
    const gauge = new THREE.Group();
    gauge.position.set(4.7, 1.5, 0.2);
    gauge.rotation.set(-0.1, -0.4, 0);
    root.add(gauge);
    const face = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.25, 64), whiteMat);
    face.rotation.x = Math.PI / 2;
    gauge.add(face);
    const gRim = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.1, 20, 80), charMat);
    gRim.position.z = 0.1;
    gauge.add(gRim);
    for (let i = 0; i < 9; i++) {
      const a = -2.1 + (i / 8) * 3.0;
      const t = rbox(0.07, i % 4 === 0 ? 0.28 : 0.18, 0.05, i > 5 ? redMat : charMat, 0.02);
      t.position.set(-Math.sin(a) * 0.98, Math.cos(a) * 0.98, 0.16);
      t.rotation.z = a;
      gauge.add(t);
    }
    const needleGeo = new THREE.BoxGeometry(0.07, 0.85, 0.05);
    needleGeo.translate(0, 0.42, 0);
    const needle = new THREE.Mesh(needleGeo, redMat);
    needle.position.z = 0.2;
    gauge.add(needle);
    const pin = sphere(0.14, charMat);
    pin.position.z = 0.22;
    gauge.add(pin);

    /* ---------- ROI curve ---------- */
    const roiCurve = new THREE.CatmullRomCurve3(
      [[-4.8, -3.8], [-3.5, -3.6], [-2.4, -3.85], [-1.2, -3.1], [0, -3.25], [1.1, -2.3]].map(
        ([x, y]) => new THREE.Vector3(x, y, 0.4)
      )
    );
    const roiGeo = new THREE.TubeGeometry(roiCurve, 96, 0.07, 14, false);
    const roiTotal = roiGeo.index.count;
    root.add(new THREE.Mesh(roiGeo, redMat));
    const roiNodes = [0.2, 0.5, 0.8, 1].map((t) => {
      const m = glowMat(0);
      const n = sphere(0.14, m);
      n.position.copy(roiCurve.getPoint(t));
      root.add(n);
      return { n, m, t };
    });

    /* ---------- CTA button + cursor ---------- */
    const button = rbox(2.1, 0.8, 0.5, redMat, 0.22);
    button.position.set(3.5, -3.3, 0.6);
    root.add(button);
    const pill = rbox(0.9, 0.12, 0.1, whiteMat, 0.05);
    pill.position.set(0, 0, 0.27);
    button.add(pill);
    const ripple = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.03, 12, 64), glowMat(0));
    ripple.position.set(3.5, -3.3, 0.95);
    root.add(ripple);
    const cursor = new THREE.Group();
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.62, 3), charMat);
    cone.position.y = -0.3;
    cursor.add(cone);
    const cursorTail = rbox(0.12, 0.38, 0.1, whiteMat, 0.04);
    cursorTail.position.set(0.08, -0.68, 0);
    cursorTail.rotation.z = 0.5;
    cursor.add(cursorTail);
    cursor.rotation.z = 0.45;
    root.add(cursor);

    /* ---------- KPI chips ---------- */
    const chip = (x, y, z) => {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      g.add(rbox(1.7, 0.95, 0.24, whiteMat, 0.1));
      const b1 = rbox(0.95, 0.15, 0.1, redMat, 0.05); b1.position.set(-0.25, 0.17, 0.15);
      const b2 = rbox(1.2, 0.1, 0.08, greyMat, 0.04); b2.position.set(-0.1, -0.13, 0.15);
      const dot = sphere(0.1, charMat); dot.position.set(0.58, 0.17, 0.16);
      g.add(b1, b2, dot);
      root.add(g);
      return { g, base: new THREE.Vector3(x, y, z) };
    };
    const chips = [chip(-4.0, 4.3, -1.2), chip(4.2, 4.5, -1.5)];

    /* ---------- Pointer parallax ---------- */
    const tgt = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tgt.y = ((e.clientX - r.left) / r.width - 0.5) * 0.35;
      tgt.x = ((e.clientY - r.top) / r.height - 0.5) * 0.2;
    };
    const onLeave = () => { tgt.x = 0; tgt.y = 0; };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    let raf;
    const frame = (ms) => {
      const time = reduceMotion ? DURATION * 0.7 * 1000 : ms;
      const u = ((time / 1000) % DURATION) / DURATION;
      const a = u * TAU;
      const out = 1 - smooth(0.88, 1, u);

      root.rotation.x += (tgt.x - root.rotation.x) * 0.05;
      root.rotation.y += (tgt.y - root.rotation.y) * 0.05;

      // Funnel
      funnel.position.y = 0.6 + 0.08 * Math.sin(a);
      rings.forEach((r, i) => (r.rotation.z = a * (i % 2 ? -1 : 1)));
      flow.forEach(({ p, m, i }) => {
        const t = (u * 2 + i / N) % 1;
        const y = 2.7 - t * 4.4;
        const rad = funnelR(y) * 0.72 * (0.4 + 0.6 * ((i * 0.37) % 1));
        const ang = i * 2.4 + t * 7;
        p.position.set(Math.cos(ang) * rad, y, Math.sin(ang) * rad);
        m.color.copy(grey).lerp(red, smooth(0.3, 0.85, t));
        m.opacity = Math.sin(Math.PI * Math.min(t * 1.1, 1)) * 0.95;
        p.scale.setScalar(1 - t * 0.35);
      });
      const pulse = (u * 2) % 1;
      conv.scale.setScalar(0.9 + 0.2 * Math.sin(Math.PI * pulse));
      convHalo.scale.setScalar(0.8 + pulse * 1.2);
      convHalo.material.opacity = (1 - pulse) * 0.6;

      // Target and dart
      const hit = smooth(0.18, 0.36, u) * out;
      const recoil = Math.sin(Math.PI * smooth(0.36, 0.46, u)) * 0.08 * out;
      dart.position.set(2.2 * (1 - hit), 1.2 * (1 - hit), 0.62 + 7 * (1 - hit) + recoil);
      target.position.y = 1.4 + 0.1 * Math.sin(a);

      // Gauge
      const g = smooth(0.2, 0.65, u) * out;
      needle.rotation.z = -2.1 + g * 2.6 + 0.04 * Math.sin(a * 6) * g;
      gauge.position.y = 1.5 + 0.1 * Math.sin(a + 2);

      // ROI curve
      const c = smooth(0.25, 0.7, u) * out;
      roiGeo.setDrawRange(0, Math.floor((roiTotal * c) / 3) * 3);
      roiNodes.forEach((o, i) => {
        o.m.opacity = smooth(o.t * 0.45 + 0.25, o.t * 0.45 + 0.3, u) * out;
        o.n.scale.setScalar(0.9 + 0.3 * Math.sin(a * 3 + i * 1.7));
      });

      // Cursor + button
      const cm = smooth(0.35, 0.6, u) * out;
      const press = smooth(0.58, 0.62, u) - smooth(0.64, 0.7, u);
      cursor.position.set(5.0 - 1.4 * cm, -1.6 - 1.45 * cm, 1.4 - 0.25 * press);
      button.scale.setScalar(1 - 0.06 * press);
      const rp = smooth(0.6, 0.82, u);
      ripple.scale.setScalar(0.6 + 1.8 * rp);
      ripple.material.opacity = smooth(0.6, 0.63, u) * (1 - rp) * 0.8;

      chips.forEach(({ g: cg, base }, i) => {
        cg.position.y = base.y + 0.16 * Math.sin(a + i * 2);
        cg.rotation.y = 0.25 * Math.sin(a + i * 2 + 1);
        cg.rotation.z = 0.04 * Math.sin(a + i);
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
      aria-label="Animated 3D illustration of performance marketing: conversion funnel, target, ROI gauge and click-through"
    />
  );
};

export default PerformanceMarketingVisual;