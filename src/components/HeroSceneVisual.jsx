import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/**
 * Hero data-universe: a full-bleed field of animated 3D analytics modules.
 *   top-left      Affiliate network: partners, commission pulses
 *   top-right     Traffic / revenue line chart with area fill
 *   bottom-left   Growth bar chart with trend line and arrow
 *   bottom-right  Mobile installs: app-icon cubes stacking into columns
 *   mid-left/right Conversion-rate rings (desktop only)
 * Mouse: parallax, a crimson cursor light, and per-module activation.
 * Scroll: pass framer-motion's `progress` MotionValue to spread the modules.
 */

const RED = 0xd42027, CHAR = 0x2b3036, GREY = 0xedf0f1, WHITE = 0xffffff;
const DURATION = 12;
const TAU = Math.PI * 2;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export default function HeroScene({ progress }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const wrap = mountRef.current;
    if (!wrap) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    wrap.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 30);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x6a7078, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 1.3);
    key.position.set(-6, 9, 12);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xff9fa3, 1.0);
    rim.position.set(8, 2, -6);
    scene.add(rim);
    const cursorLight = new THREE.PointLight(0xff3d45, 0, 18, 1.4); // follows the pointer
    scene.add(cursorLight);

    const root = new THREE.Group();
    scene.add(root);

    /* ---------- helpers ---------- */
    const mat = (color, o = {}) =>
      new THREE.MeshPhysicalMaterial({ color, roughness: 0.3, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 1, ...o });
    const redMat = mat(RED, { roughness: 0.25, emissive: 0x4a0508 });
    const charMat = mat(CHAR, { roughness: 0.3 });
    const whiteMat = mat(WHITE, { roughness: 0.38 });
    const greyMat = mat(GREY, { roughness: 0.45, clearcoat: 0.5 });
    const glow = (o = 1) => new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity: o });
    const faint = (o) => new THREE.MeshBasicMaterial({ color: WHITE, transparent: true, opacity: o });
    const sph = (r, m) => new THREE.Mesh(new THREE.SphereGeometry(r, 28, 20), m);
    const rbox = (w, h, d, m, r = 0.1) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), m);
    const V = (x, y, z) => new THREE.Vector3(x, y, z);
    const tubeOf = (curve, r, m, seg = 80) => {
      const geo = new THREE.TubeGeometry(curve, seg, r, 10, false);
      return { mesh: new THREE.Mesh(geo, m), geo, total: geo.index.count };
    };
    const draw = (t, p, step = 3) => t.geo.setDrawRange(0, Math.floor((t.total * Math.min(1, Math.max(0, p))) / step) * step);

    // translucent glass panel + faint grid lines (the "dashboard" backing)
    const panel = (g, w = 6, h = 4.4) => {
      const pm = mat(WHITE, { transparent: true, opacity: 0.06, roughness: 0.1, depthWrite: false });
      const p = rbox(w, h, 0.12, pm, 0.3);
      p.position.z = -0.45;
      g.add(p);
      const gm = faint(0.12);
      [-1.2, -0.4, 0.4, 1.2].forEach((y) => {
        const l = new THREE.Mesh(new THREE.BoxGeometry(w - 0.8, 0.012, 0.01), gm);
        l.position.set(0, y, -0.38);
        g.add(l);
      });
      return pm;
    };

    /* ====================================================== */
    /* TOP-LEFT: affiliate network with commission pulses       */
    /* ====================================================== */
    function buildNetwork(g) {
      const pm = panel(g);
      const net = new THREE.Group();
      g.add(net);
      const hub = sph(0.55, redMat);
      net.add(hub);
      const P = [[-2, 1, 0.3], [-1, 1.7, -0.5], [1.2, 1.5, 0.5], [2.1, 0.4, -0.4], [2, -1, 0.6], [0.5, -1.7, -0.3], [-1.2, -1.5, 0.4], [-2.3, -0.3, -0.6]].map((p) => V(...p));
      const nodes = P.map((p, i) => {
        const n = sph(0.2 + (i % 3) * 0.04, i % 2 ? whiteMat : greyMat);
        n.position.copy(p);
        net.add(n);
        return n;
      });
      const seg = [];
      P.forEach((p, i) => {
        seg.push(0, 0, 0, p.x, p.y, p.z);
        const q = P[(i + 1) % P.length];
        seg.push(p.x, p.y, p.z, q.x, q.y, q.z);
      });
      const eg = new THREE.BufferGeometry();
      eg.setAttribute("position", new THREE.Float32BufferAttribute(seg, 3));
      net.add(new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: WHITE, transparent: true, opacity: 0.3 })));
      const coins = P.map(() => {
        const m = glow(0);
        const c = sph(0.1, m);
        net.add(c);
        return { c, m };
      });
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.02, 10, 64), glow(0));
      net.add(halo);

      return {
        pm,
        update: ({ u, a, out, spin, ph, act }) => {
          net.rotation.y = 0.55 * Math.sin(a) + spin * 0.5;
          net.rotation.x = 0.15 * Math.sin(a * 2);
          hub.scale.setScalar(1 + 0.08 * Math.sin(a * 6) + 0.2 * act);
          nodes.forEach((n, i) => {
            const s = smooth(0.05 + i * 0.05, 0.16 + i * 0.05, u) * out;
            n.scale.setScalar(Math.max(s, 0.0001));
          });
          coins.forEach(({ c, m }, i) => {
            const t = (u * 3 + i / P.length + ph) % 1;
            c.position.copy(P[i]).multiplyScalar(t);
            m.opacity = Math.sin(Math.PI * t) * smooth(0.25, 0.35, u) * out;
          });
          const h = (u * 3) % 1;
          halo.scale.setScalar(0.8 + h * 2.2);
          halo.material.opacity = (1 - h) * 0.5 * out;
        },
      };
    }

    /* ====================================================== */
    /* TOP-RIGHT: traffic line chart with area ribbon           */
    /* ====================================================== */
    function buildLine(g) {
      const pm = panel(g);
      const N = 26;
      const top = [], prev = [];
      for (let i = 0; i < N; i++) {
        const t = i / (N - 1), x = -2.5 + 5 * t;
        top.push(V(x, -1.3 + 2.7 * Math.pow(t, 1.5) + 0.16 * Math.sin(i * 1.1) * (0.3 + t), 0.05));
        prev.push(V(x, -1.3 + 1.3 * Math.pow(t, 1.15) + 0.1 * Math.sin(i * 1.7), 0));
      }
      const curve = new THREE.CatmullRomCurve3(top);
      const line = tubeOf(curve, 0.05, glow(1));
      const old = tubeOf(new THREE.CatmullRomCurve3(prev), 0.025, faint(0.4));
      g.add(line.mesh, old.mesh);
      const pos = [], idx = [];
      top.forEach((p, i) => pos.push(p.x, p.y, -0.02, p.x, -1.45, -0.02));
      for (let i = 0; i < N - 1; i++) idx.push(2 * i, 2 * i + 1, 2 * i + 2, 2 * i + 1, 2 * i + 3, 2 * i + 2);
      const rg = new THREE.BufferGeometry();
      rg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      rg.setIndex(idx);
      const rm = new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false });
      g.add(new THREE.Mesh(rg, rm));
      const rib = { geo: rg, total: idx.length };
      const dot = sph(0.14, glow(1));
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.025, 10, 40), glow(0.6));
      g.add(dot, halo);
      const tip = rbox(1.0, 0.42, 0.1, whiteMat, 0.1); // KPI chip that pops on hover
      const tipBar = rbox(0.55, 0.08, 0.05, redMat, 0.03);
      tipBar.position.set(-0.1, 0.06, 0.07);
      tip.add(tipBar);
      g.add(tip);

      return {
        pm,
        update: ({ u, a, out, act }) => {
          const p = smooth(0.1, 0.6, u) * out;
          draw(line, p);
          draw(old, Math.min(1, p * 1.2));
          draw(rib, p, 6);
          const tp = Math.min(Math.max(p, 0.001), 1);
          const pt = curve.getPoint(tp);
          dot.position.copy(pt);
          dot.scale.setScalar((1 + 0.2 * Math.sin(a * 8)) * (0.8 + 0.6 * act) * (p > 0.01 ? 1 : 0.0001));
          halo.position.copy(pt);
          halo.scale.setScalar(1 + 0.4 * Math.sin(a * 8) + act);
          tip.position.set(pt.x - 0.4, pt.y + 0.65, 0.2);
          tip.scale.setScalar(Math.max(act * smooth(0.2, 0.4, u) * out, 0.0001));
          rm.opacity = 0.18 + 0.2 * act;
        },
      };
    }

    /* ====================================================== */
    /* BOTTOM-LEFT: growth bars + trend line + arrow            */
    /* ====================================================== */
    function buildBars(g) {
      const pm = panel(g);
      const Hs = [0.5, 0.75, 0.95, 1.3, 1.75, 2.3, 3.0];
      const bars = Hs.map((h, i) => {
        const geo = new RoundedBoxGeometry(0.46, 1, 0.46, 4, 0.1);
        geo.translate(0, 0.5, 0);
        const m = new THREE.Mesh(geo, i >= 5 ? redMat : i >= 3 ? whiteMat : greyMat);
        m.position.set(-2.2 + i * 0.73, -1.85, 0);
        g.add(m);
        return { m, h };
      });
      const curve = new THREE.CatmullRomCurve3(Hs.map((h, i) => V(-2.2 + i * 0.73, -1.85 + h + 0.5, 0.15)));
      const line = tubeOf(curve, 0.045, glow(1), 60);
      const head = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.46, 20), redMat);
      const UP = V(0, 1, 0);
      g.add(line.mesh, head);
      return {
        pm,
        update: ({ u, a, out, act, ms }) => {
          bars.forEach(({ m, h }, i) => {
            const gr = smooth(0.06 + i * 0.06, 0.3 + i * 0.06, u) * out;
            const wave = 0.5 + 0.5 * Math.sin(ms * 0.006 - i * 0.8);
            m.scale.y = Math.max(h * gr * (1 + 0.14 * act * wave), 0.001);
          });
          const p = smooth(0.4, 0.75, u) * out;
          draw(line, p);
          const tp = Math.min(Math.max(p, 0.001), 1);
          head.position.copy(curve.getPoint(tp));
          head.quaternion.setFromUnitVectors(UP, curve.getTangent(tp));
          head.scale.setScalar(Math.max(smooth(0, 0.06, p), 0.0001));
        },
      };
    }

    /* ====================================================== */
    /* BOTTOM-RIGHT: mobile installs: app-icon cubes stacking   */
    /* ====================================================== */
    function buildInstalls(g) {
      const pm = panel(g);
      const counts = [1, 2, 3, 5, 7];
      const cubes = [];
      counts.forEach((n, j) => {
        for (let k = 0; k < n; k++) {
          const top = k === n - 1;
          const m = rbox(0.4, 0.4, 0.4, top ? redMat : k % 2 ? whiteMat : greyMat, 0.12);
          const by = -1.8 + 0.2 + k * 0.43;
          m.position.set(-2 + j * 1.0, by, 0);
          g.add(m);
          cubes.push({ m, j, k, by, x: -2 + j });
        }
      });
      const badge = new THREE.Group();
      badge.add(sph(0.34, redMat));
      const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.28, 12), whiteMat);
      sh.position.y = 0.06;
      const hd = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.18, 14), whiteMat);
      hd.rotation.z = Math.PI;
      hd.position.y = -0.12;
      badge.add(sh, hd);
      g.add(badge);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.025, 10, 48), glow(0));
      g.add(ring);
      return {
        pm,
        update: ({ u, a, out, act, ms }) => {
          cubes.forEach(({ m, j, k, by, x }) => {
            const t0 = 0.08 + j * 0.08 + k * 0.025;
            const d = smooth(t0, t0 + 0.1, u) * out;
            const e = 1 - Math.pow(1 - d, 3);
            m.position.y = by + (1 - e) * 2.6 + act * 0.12 * Math.sin(ms * 0.007 - j * 0.9);
            m.scale.setScalar(Math.max(e, 0.0001));
            m.rotation.y = (1 - e) * 1.5;
          });
          const bp = smooth(0.7, 0.8, u) * out;
          badge.position.set(2, 1.5 + 0.12 * Math.sin(a * 6), 0.1);
          badge.scale.setScalar(Math.max(bp * (1 + 0.1 * act), 0.0001));
          const t = (u * 4) % 1;
          ring.position.copy(badge.position);
          ring.scale.setScalar(0.8 + t * 1.6);
          ring.material.opacity = (1 - t) * 0.6 * bp;
        },
      };
    }

    /* ====================================================== */
    /* MID-LEFT / MID-RIGHT: conversion-rate rings              */
    /* ====================================================== */
    function buildDonut(g, pct) {
      g.add(new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 16, 72), mat(WHITE, { transparent: true, opacity: 0.18, depthWrite: false })));
      const pts = Array.from({ length: 49 }, (_, k) => {
        const ang = Math.PI / 2 - (k / 48) * TAU * pct;
        return V(Math.cos(ang), Math.sin(ang), 0);
      });
      const arc = tubeOf(new THREE.CatmullRomCurve3(pts), 0.16, redMat, 120);
      g.add(arc.mesh);
      const core = sph(0.3, redMat);
      g.add(core);
      const orb = sph(0.09, whiteMat);
      g.add(orb);
      return {
        pm: null,
        update: ({ u, a, out, spin }) => {
          draw(arc, smooth(0.15, 0.6, u) * out);
          core.scale.setScalar(1 + 0.15 * Math.sin(a * 6));
          orb.position.set(Math.cos(a * 3) * 1.45, Math.sin(a * 3) * 1.45, 0);
          g.rotation.y = 0.35 * Math.sin(a) + spin * 0.4;
        },
      };
    }

    /* ---------- modules ---------- */
    const defs = [
      { build: buildNetwork, sx: -1, sy: 1, depth: 0.9 },
      { build: buildLine, sx: 1, sy: 1, depth: 0.6 },
      { build: buildBars, sx: -1, sy: -1, depth: 0.7 },
      { build: buildInstalls, sx: 1, sy: -1, depth: 1.0 },
      { build: (g) => buildDonut(g, 0.72), sx: -1, sy: 0, depth: 0.5, mid: true },
      { build: (g) => buildDonut(g, 0.88), sx: 1, sy: 0, depth: 0.8, mid: true },
    ];
    const clusters = defs.map((d) => {
      const slot = new THREE.Group();
      const g = new THREE.Group();
      slot.add(g);
      root.add(slot);
      const rip = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.03, 8, 96), glow(0));
      rip.position.z = -0.5;
      slot.add(rip);
      const { update, pm } = d.build(g);
      return { ...d, slot, g, rip, update, pm, act: 0, prevAct: 0, spin: 0, ph: 0, ripAt: -1e9, base: V(0, 0, 0), s: 1 };
    });

    /* ---------- ambient data dust ---------- */
    const DUST = 80;
    const dust = new THREE.InstancedMesh(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.55 }), DUST);
    const dustData = Array.from({ length: DUST }, (_, i) => ({
      nx: (Math.sin(i * 12.9898) * 43758.5453) % 1 * 0.5 + 0.5,
      ny: (Math.sin(i * 78.233) * 12345.678) % 1 * 0.5 + 0.5,
      nz: (Math.sin(i * 39.346) * 9876.543) % 1 * 0.5 + 0.5,
      sp: 1 + (i % 2),
    }));
    dustData.forEach((d, i) => dust.setColorAt(i, new THREE.Color(i % 4 === 0 ? RED : 0xcfd4d8)));
    root.add(dust);
    const dummy = new THREE.Object3D();

    /* ---------- layout ---------- */
    let W = 1, H = 1;
    const layout = () => {
      H = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      W = H * camera.aspect;
      const wide = camera.aspect > 1;
      const s = Math.min(W * (wide ? 0.13 : 0.2), H * 0.17) / 3;
      clusters.forEach((c) => {
        c.s = s * (c.mid ? 0.7 : 1);
        c.visible = !c.mid || camera.aspect > 1.25;
        c.slot.visible = c.visible;
        c.base.set(c.sx * (c.mid ? W / 2 - 2.4 * s : W / 2 - 3.3 * s), c.sy * (H / 2 - 2.6 * s), 0);
      });
    };
    const resize = () => {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      layout();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    /* ---------- pointer / visibility ---------- */
    const ptr = { x: 0, y: 0, in: false };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      ptr.in = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      ptr.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    const onLeave = () => { ptr.in = false; };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(wrap);

    /* ---------- loop ---------- */
    let raf, last = 0;
    const tmp = V(0, 0, 0);
    const frame = (ms) => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) { last = ms; return; }
      const dt = Math.min((ms - last) / 1000, 0.05);
      last = ms;
      const time = reduceMotion ? DURATION * 0.7 * 1000 : ms;
      const u = ((time / 1000) % DURATION) / DURATION;
      const a = u * TAU;
      const out = 1 - smooth(0.9, 1, u);
      const p = progress?.get ? progress.get() : 1;
      const grow = Math.min(1, p / 0.82);
      const spread = 0.86 + 0.14 * grow;

      root.rotation.y += (ptr.x * 0.1 - root.rotation.y) * 0.05;
      root.rotation.x += (-ptr.y * 0.07 - root.rotation.x) * 0.05;
      camera.position.x += (ptr.x * 0.7 - camera.position.x) * 0.04;
      camera.position.y += (ptr.y * 0.45 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      cursorLight.position.set(ptr.x * W * 0.5, ptr.y * H * 0.5, 5);
      cursorLight.intensity += ((ptr.in ? 45 : 0) - cursorLight.intensity) * Math.min(1, dt * 5);

      let maxAct = 0;
      clusters.forEach((c, i) => {
        if (!c.visible) return;
        tmp.copy(c.base).multiplyScalar(spread).project(camera);
        const d = Math.hypot((tmp.x - ptr.x) * camera.aspect, tmp.y - ptr.y);
        const target = ptr.in ? 1 - smooth(0.2, 0.48, d) : 0;
        c.act += (target - c.act) * Math.min(1, dt * 6);
        if (c.act > 0.5 && c.prevAct <= 0.5) c.ripAt = performance.now();
        c.prevAct = c.act;
        maxAct = Math.max(maxAct, c.act);
        c.spin += dt * c.act * 4;
        if (c.act < 0.02) c.spin += (Math.round(c.spin / TAU) * TAU - c.spin) * Math.min(1, dt * 3);
        c.ph += dt * c.act * 1.5;

        c.slot.position.set(
          c.base.x * spread + ptr.x * c.depth * 0.45,
          c.base.y * spread + ptr.y * c.depth * 0.3 + 0.1 * Math.sin(a * 2 + i),
          c.act * 1.2
        );
        c.slot.scale.setScalar(c.s * (0.9 + 0.1 * grow) * (1 + 0.14 * c.act));
        c.slot.rotation.y = (c.sx * -0.18 + ptr.x * 0.3 * c.act) * (c.mid ? 0 : 1);
        c.slot.rotation.x = -ptr.y * 0.2 * c.act;
        if (c.pm) c.pm.opacity = 0.06 + 0.12 * c.act;
        c.update({ u, a, out, act: c.act, spin: c.spin, ph: c.ph, ms });

        const e = (performance.now() - c.ripAt) / 900;
        c.rip.visible = e >= 0 && e < 1 && !c.mid;
        if (c.rip.visible) {
          c.rip.scale.setScalar(0.9 + e * 0.5);
          c.rip.material.opacity = (1 - e) * 0.55;
        }
      });

      // drifting data dust (integer cycles per loop: seamless)
      dustData.forEach((d, i) => {
        dummy.position.set((d.nx - 0.5) * W * 1.1, ((d.ny + u * d.sp) % 1 - 0.5) * H * 1.1, -8 + d.nz * 10);
        dummy.scale.setScalar(0.8 + 0.6 * Math.sin(a * 2 + i));
        dummy.updateMatrix();
        dust.setMatrixAt(i, dummy.matrix);
      });
      dust.instanceMatrix.needsUpdate = true;

      redMat.emissiveIntensity = 1 + 0.8 * maxAct;
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
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
  }, [progress]);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}