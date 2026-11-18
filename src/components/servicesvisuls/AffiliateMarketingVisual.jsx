import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const RED = 0xd42027, CHAR = 0x1a1d1f, GREY = 0xedf0f1, WHITE = 0xffffff;
const DURATION = 8;
const TAU = Math.PI * 2;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const AffiliateMarketingVisual = () => {
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
    renderer.toneMappingExposure = 1.05;
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex; // reflections only, background stays transparent

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0.3, 25);
    camera.lookAt(0, 0.2, 0);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb8bec2, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(-5, 8, 10);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffd9da, 0.8);
    rim.position.set(7, 2, -6);
    scene.add(rim);

    const root = new THREE.Group(); // receives pointer parallax
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
    const sphere = (r, m) => new THREE.Mesh(new THREE.SphereGeometry(r, 48, 36), m);

    /* ---------- Central hub ---------- */
    const hub = new THREE.Group();
    root.add(hub);
    hub.add(sphere(1.2, redMat));
    const ringA = new THREE.Group();
    const pivotA = new THREE.Group();
    pivotA.rotation.x = 1.15;
    pivotA.add(ringA);
    hub.add(pivotA);
    ringA.add(new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.065, 24, 128), charMat));
    [0, 2.094, 4.188].forEach((a, i) => {
      const s = sphere(0.17, i === 0 ? whiteMat : greyMat);
      s.position.set(Math.cos(a) * 1.75, Math.sin(a) * 1.75, 0);
      ringA.add(s);
    });
    const ringB = new THREE.Group();
    const pivotB = new THREE.Group();
    pivotB.rotation.set(-0.6, 0, 0.9);
    pivotB.add(ringB);
    hub.add(pivotB);
    ringB.add(new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.03, 16, 128), greyMat));
    const bead = sphere(0.1, redMat);
    bead.position.set(2.2, 0, 0);
    ringB.add(bead);

    /* ---------- Partners ---------- */
    const partner = (coinMat, glyphMat, pos, scale = 1) => {
      const g = new THREE.Group();
      g.position.copy(pos);
      g.scale.setScalar(scale);
      const coin = sphere(0.95, coinMat);
      coin.scale.set(1, 1, 0.5);
      g.add(coin);
      const head = sphere(0.22, glyphMat);
      head.position.set(0, 0.22, 0.4);
      g.add(head);
      const sh = sphere(0.42, glyphMat);
      sh.scale.set(1, 0.62, 0.35);
      sh.position.set(0, -0.28, 0.4);
      g.add(sh);
      const dot = sphere(0.15, redMat);
      dot.position.set(0.72, 0.62, 0.3);
      g.add(dot);
      root.add(g);
      return { g, base: pos.clone() };
    };
    const partners = [
      partner(whiteMat, charMat, new THREE.Vector3(-3.8, 0.6, 0.5)),
      partner(charMat, whiteMat, new THREE.Vector3(3.8, 0.6, 0.5)),
      partner(whiteMat, charMat, new THREE.Vector3(-4.0, 3.3, -1.6), 0.5),
      partner(charMat, whiteMat, new THREE.Vector3(4.4, 3.0, -2.0), 0.5),
      partner(charMat, whiteMat, new THREE.Vector3(-3.3, -3.0, -1.2), 0.5),
    ];

    /* ---------- Links (curved tubes + travelling particles) ---------- */
    const links = [];
    const makeLink = (curve, thin, nParticles) => {
      root.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, thin ? 0.025 : 0.035, 12, false), greyMat));
      const geo = new THREE.TubeGeometry(curve, 64, thin ? 0.04 : 0.055, 12, false);
      const m = glowMat();
      root.add(new THREE.Mesh(geo, m));
      const parts = Array.from({ length: nParticles }, () => {
        const pm = glowMat(0);
        const p = sphere(thin ? 0.075 : 0.1, pm);
        root.add(p);
        return { p, pm };
      });
      links.push({ curve, geo, m, parts, total: geo.index.count });
    };
    [-1, 1].forEach((sx) =>
      makeLink(
        new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(sx * 2.7, 0.4, 0.5),
          new THREE.Vector3(sx * 1.9, -1.5, 0.5),
          new THREE.Vector3(sx * 1.2, -0.4, 0.3)
        ),
        false,
        3
      )
    );
    partners.slice(2).forEach(({ base }) => {
      const dir = base.clone().normalize();
      const start = base.clone().sub(dir.clone().multiplyScalar(0.55));
      const end = dir.clone().multiplyScalar(1.3);
      const ctrl = start.clone().add(end).multiplyScalar(0.5).add(new THREE.Vector3(0, -0.9, 0.8));
      makeLink(new THREE.QuadraticBezierCurve3(start, ctrl, end), true, 2);
    });

    /* ---------- Growth arrow ---------- */
    const arrowCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.5, 1.9, -0.8),
      new THREE.Vector3(-0.4, 2.3, -0.8),
      new THREE.Vector3(0.5, 2.9, -0.8),
      new THREE.Vector3(1.6, 4.0, -0.8),
    ]);
    const arrow = new THREE.Group();
    root.add(arrow);
    const arrowGeo = new THREE.TubeGeometry(arrowCurve, 64, 0.085, 16, false);
    arrow.add(new THREE.Mesh(arrowGeo, redMat));
    const arrowTotal = arrowGeo.index.count;
    const arrowHead = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.6, 32), redMat);
    arrow.add(arrowHead);
    const nodes = [0.15, 0.45, 0.75].map((t) => {
      const m = glowMat(0);
      const n = sphere(0.13, m);
      n.position.copy(arrowCurve.getPoint(t));
      n.position.z += 0.1;
      arrow.add(n);
      return { n, m, t };
    });
    const UP = new THREE.Vector3(0, 1, 0);

    /* ---------- 3D growth bars ---------- */
    const barDefs = [
      { h: 0.8, m: greyMat }, { h: 1.3, m: greyMat }, { h: 1.9, m: charMat }, { h: 2.7, m: redMat },
    ];
    const bars = barDefs.map((d, i) => {
      const geo = new RoundedBoxGeometry(0.55, 1, 0.55, 5, 0.12);
      geo.translate(0, 0.5, 0);
      const mesh = new THREE.Mesh(geo, d.m);
      mesh.position.set(1.5 + i * 0.85, -3.5, 0.2);
      root.add(mesh);
      return { mesh, h: d.h };
    });
    const barSpark = sphere(0.14, glowMat(0));
    root.add(barSpark);

    /* ---------- Commission coins ---------- */
    const coins = [
      new THREE.Vector3(-1.0, -3.3, 1.2),
      new THREE.Vector3(5.2, -1.0, 0.4),
      new THREE.Vector3(-5.3, 1.8, -0.3),
    ].map((pos, i) => {
      const g = new THREE.Group();
      g.position.copy(pos);
      const face = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.14, 48), redMat);
      const rimM = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.045, 16, 48), whiteMat);
      rimM.rotation.x = Math.PI / 2;
      const core = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.17, 32), whiteMat);
      const spin = new THREE.Group();
      spin.add(face, rimM, core);
      spin.rotation.x = Math.PI / 2;
      const holder = new THREE.Group();
      holder.add(spin);
      g.add(holder);
      root.add(g);
      return { g, holder, base: pos.clone(), ph: i * 2.1 };
    });

    /* ---------- Ambient dust ---------- */
    const DUST = 40;
    const dust = new THREE.InstancedMesh(
      new THREE.SphereGeometry(0.05, 10, 8),
      new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity: 0.45 }),
      DUST
    );
    const dustBase = Array.from({ length: DUST }, (_, i) => ({
      x: (Math.sin(i * 12.9898) * 43758.5453 % 1) * 11,
      y: (Math.sin(i * 78.233) * 12345.678 % 1) * 8,
      z: (Math.sin(i * 39.346) * 9876.543 % 1) * 3 - 1.5,
      ph: i * 1.7,
      s: 0.6 + (i % 4) * 0.3,
    }));
    root.add(dust);
    const dummy = new THREE.Object3D();

    /* ---------- Pointer parallax ---------- */
    const target = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      target.y = ((e.clientX - r.left) / r.width - 0.5) * 0.35;
      target.x = ((e.clientY - r.top) / r.height - 0.5) * 0.2;
    };
    const onLeave = () => { target.x = 0; target.y = 0; };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    /* ---------- Animation ---------- */
    let raf;
    const frame = (ms) => {
      const time = reduceMotion ? DURATION * 0.6 * 1000 : ms;
      const u = ((time / 1000) % DURATION) / DURATION;
      const a = u * TAU;
      const reveal = smooth(0.08, 0.5, u);
      const fade = 1 - smooth(0.86, 0.99, u);

      root.rotation.x += (target.x - root.rotation.x) * 0.05;
      root.rotation.y += (target.y - root.rotation.y) * 0.05;

      hub.position.y = 0.06 * Math.sin(a * 2);
      hub.rotation.y = a;
      ringA.rotation.z = a;
      ringB.rotation.z = -a * 2;

      partners.forEach(({ g, base }, i) => {
        const ph = i * 1.3;
        g.position.y = base.y + (i < 2 ? 0.12 : 0.18) * Math.sin(a + ph);
        g.position.x = base.x + (i < 2 ? 0 : 0.08) * Math.sin(a * 2 + ph);
        g.rotation.y = 0.3 * Math.sin(a + ph);
        g.rotation.z = 0.05 * Math.sin(a + ph + 1);
      });

      links.forEach((l, k) => {
        l.geo.setDrawRange(0, Math.floor((l.total * reveal) / 3) * 3);
        l.m.opacity = fade;
        l.parts.forEach((q, i) => {
          const t = (u * 2 + i / l.parts.length + k * 0.17) % 1;
          q.p.position.copy(l.curve.getPoint(t));
          q.pm.opacity = smooth(0.3, 0.4, u) * fade * Math.sin(Math.PI * t);
          q.p.scale.setScalar(0.8 + 0.5 * Math.sin(Math.PI * t));
        });
      });

      // Arrow: draws out and retracts so the loop is seamless
      const p = smooth(0.3, 0.72, u) * (1 - smooth(0.86, 0.99, u));
      arrowGeo.setDrawRange(0, Math.floor((arrowTotal * p) / 3) * 3);
      arrow.position.y = -0.5 + 0.5 * p;
      const tp = Math.min(Math.max(p, 0.001), 1);
      arrowHead.position.copy(arrowCurve.getPoint(tp));
      arrowHead.quaternion.setFromUnitVectors(UP, arrowCurve.getTangent(tp));
      arrowHead.scale.setScalar(Math.max(smooth(0, 0.06, p), 0.0001));
      nodes.forEach((o, i) => {
        const on = smooth(o.t * 0.7 + 0.2, o.t * 0.7 + 0.3, u) * fade;
        const pulse = Math.sin(a * 3 + i * 2);
        o.m.opacity = on * (0.65 + 0.35 * pulse);
        o.n.scale.setScalar(0.9 + 0.3 * pulse);
      });

      // Bars rise in sequence and settle back
      const out = 1 - smooth(0.88, 1, u);
      bars.forEach((b, i) => {
        const gr = smooth(0.25 + i * 0.07, 0.6 + i * 0.05, u) * out;
        b.mesh.scale.y = Math.max(gr * b.h, 0.001);
      });
      const top = bars[3];
      barSpark.position.set(top.mesh.position.x, top.mesh.position.y + top.mesh.scale.y + 0.3, 0.2);
      barSpark.material.opacity = smooth(0.6, 0.72, u) * out * (0.7 + 0.3 * Math.sin(a * 4));

      coins.forEach((c, i) => {
        c.g.position.y = c.base.y + 0.2 * Math.sin(a + c.ph);
        c.holder.rotation.y = a * (i % 2 ? -1 : 1) * 2;
        c.holder.rotation.x = 0.35 * Math.sin(a + c.ph);
      });

      dustBase.forEach((d, i) => {
        dummy.position.set(d.x - 5.5, d.y - 4 + 0.25 * Math.sin(a + d.ph), d.z - 1);
        dummy.scale.setScalar(d.s * (0.8 + 0.2 * Math.sin(a * 2 + d.ph)));
        dummy.updateMatrix();
        dust.setMatrixAt(i, dummy.matrix);
      });
      dust.instanceMatrix.needsUpdate = true;

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
      aria-label="Animated 3D illustration of affiliate marketing and strategic partnerships"
    />
  );
};

export default AffiliateMarketingVisual;