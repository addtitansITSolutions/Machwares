import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const RED = 0xd42027, CHAR = 0x1a1d1f, GREY = 0xedf0f1, WHITE = 0xffffff;
const DURATION = 11;
const TAU = Math.PI * 2;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const InfluencerStaircaseVisual = () => {
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
    camera.position.set(0, 0.5, 26);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb8bec2, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(-5, 8, 10);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffd9da, 0.8);
    rim.position.set(7, 2, -6);
    scene.add(rim);

    const root = new THREE.Group();
    scene.add(root);
    const stage = new THREE.Group(); // isometric-style base angle
    root.add(stage);

    const mat = (color, o = {}) =>
      new THREE.MeshPhysicalMaterial({ color, roughness: 0.3, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.9, ...o });
    const redMat = mat(RED, { roughness: 0.25, emissive: 0x3a0305 });
    const charMat = mat(CHAR, { roughness: 0.32 });
    const whiteMat = mat(WHITE, { roughness: 0.38 });
    const greyMat = mat(GREY, { roughness: 0.45, clearcoat: 0.5 });
    const rbox = (w, h, d, m, r = 0.1) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), m);
    const baseBox = (w, d, m, r) => {
      const geo = new RoundedBoxGeometry(w, 1, d, 4, r);
      geo.translate(0, 0.5, 0);
      return new THREE.Mesh(geo, m);
    };

    // heart
    const hs = new THREE.Shape();
    hs.moveTo(0.25, 0.25);
    hs.bezierCurveTo(0.25, 0.25, 0.2, 0, 0, 0);
    hs.bezierCurveTo(-0.3, 0, -0.3, 0.35, -0.3, 0.35);
    hs.bezierCurveTo(-0.3, 0.55, -0.1, 0.77, 0.25, 0.95);
    hs.bezierCurveTo(0.6, 0.77, 0.8, 0.55, 0.8, 0.35);
    hs.bezierCurveTo(0.8, 0.35, 0.8, 0, 0.5, 0);
    hs.bezierCurveTo(0.35, 0, 0.25, 0.25, 0.25, 0.25);
    const heartGeo = new THREE.ExtrudeGeometry(hs, { depth: 0.22, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 4, curveSegments: 20 });
    heartGeo.rotateZ(Math.PI);
    heartGeo.center();

    /* ---------- Follower staircase ---------- */
    const BASE_Y = -3.2, STEP_X0 = -4.4, STEP_DX = 1.75;
    const heights = [0.6, 1.1, 1.65, 2.2, 2.75, 3.3];
    const followerCounts = [0, 1, 2, 2, 3, 3];
    const figMats = [redMat, charMat, greyMat];
    const steps = heights.map((h, i) => {
      const x = STEP_X0 + i * STEP_DX;
      const body = baseBox(1.5, 1.5, charMat, 0.14);
      body.position.set(x, BASE_Y, 0);
      const cap = rbox(1.5, 0.12, 1.5, i >= 3 ? redMat : greyMat, 0.05);
      stage.add(body, cap);
      const figs = [];
      for (let k = 0; k < followerCounts[i]; k++) {
        const f = new THREE.Group();
        const m = figMats[(i + k) % 3];
        const torso = rbox(0.28, 0.4, 0.22, m, 0.09);
        torso.position.y = 0.2;
        const head = rbox(0.22, 0.22, 0.22, m, 0.09);
        head.position.y = 0.5;
        f.add(torso, head);
        const fx = x + (k - (followerCounts[i] - 1) / 2) * 0.42;
        f.userData = { x: fx, z: 0.1 + (k % 2) * 0.25 - 0.1, i, k };
        stage.add(f);
        figs.push(f);
      }
      return { body, cap, h, x, figs, i };
    });

    /* ---------- Creator on the top step ---------- */
    const topY = BASE_Y + heights[5] + 0.06;
    const creator = new THREE.Group();
    creator.position.set(STEP_X0 + 5 * STEP_DX, topY, 0);
    stage.add(creator);
    const torso = rbox(1.2, 1.0, 0.7, redMat, 0.3);
    torso.position.y = 0.5;
    const head = rbox(0.8, 0.85, 0.8, whiteMat, 0.3);
    head.position.y = 1.42;
    const hair = rbox(0.86, 0.26, 0.86, charMat, 0.12);
    hair.position.y = 1.78;
    const eyeA = rbox(0.1, 0.1, 0.06, charMat, 0.03); eyeA.position.set(-0.17, 1.45, 0.4);
    const eyeB = rbox(0.1, 0.1, 0.06, charMat, 0.03); eyeB.position.set(0.17, 1.45, 0.4);
    creator.add(torso, head, hair, eyeA, eyeB);
    // verified diamond
    const seal = rbox(0.6, 0.6, 0.14, redMat, 0.14);
    seal.rotation.z = Math.PI / 4;
    seal.position.set(1.0, 2.0, 0.2);
    const c1 = rbox(0.09, 0.22, 0.05, whiteMat, 0.03); c1.position.set(-0.09, -0.04, 0.09); c1.rotation.z = -Math.PI / 4 + 0.8;
    const c2 = rbox(0.09, 0.42, 0.05, whiteMat, 0.03); c2.position.set(0.08, 0.04, 0.09); c2.rotation.z = -Math.PI / 4 - 0.8;
    const sealCheck = new THREE.Group();
    sealCheck.rotation.z = -Math.PI / 4;
    sealCheck.add(c1, c2);
    seal.add(sealCheck);
    creator.add(seal);
    // phone held out (square, red recording light)
    const phone = rbox(0.4, 0.7, 0.1, charMat, 0.08);
    phone.position.set(-0.95, 0.95, 0.3);
    phone.rotation.z = 0.2;
    const rec = rbox(0.09, 0.09, 0.05, redMat, 0.02);
    rec.position.set(0.1, 0.27, 0.07);
    phone.add(rec);
    creator.add(phone);

    /* ---------- Post cards (diagonal cascade) ---------- */
    const mkCard = (shade) => {
      const g = new THREE.Group();
      const back = rbox(1.78, 2.28, 0.1, charMat, 0.14);
      const face = rbox(1.7, 2.2, 0.12, whiteMat, 0.14);
      face.position.z = 0.04;
      const img = rbox(1.4, 1.0, 0.08, shade, 0.08);
      img.position.set(0, 0.45, 0.12);
      const sun = rbox(0.4, 0.4, 0.06, redMat, 0.08);
      sun.position.set(0.3, 0.25, 0.06);
      img.add(sun);
      const av = rbox(0.3, 0.3, 0.06, redMat, 0.1);
      av.position.set(-0.55, -0.4, 0.12);
      const b1 = rbox(0.7, 0.08, 0.04, charMat, 0.03); b1.position.set(0.05, -0.33, 0.12);
      const b2 = rbox(0.5, 0.07, 0.04, greyMat, 0.03); b2.position.set(-0.05, -0.5, 0.12);
      const h = new THREE.Mesh(heartGeo, redMat);
      h.scale.setScalar(0.2);
      h.position.set(0.58, -0.7, 0.14);
      g.add(back, face, img, av, b1, b2, h);
      stage.add(g);
      return { g, h };
    };
    const cards = [
      { ...mkCard(greyMat), x: -3.9, y: 2.3, z: 0.6 },
      { ...mkCard(greyMat), x: -1.7, y: 3.2, z: 0.2 },
      { ...mkCard(greyMat), x: 0.5, y: 4.1, z: -0.2 },
    ];

    /* ---------- Story bars (top right) ---------- */
    const stories = [0, 1, 2].map((i) => {
      const g = new THREE.Group();
      g.position.set(3.0 + i * 1.15, 4.7, -0.5);
      g.add(rbox(0.98, 1.7, 0.1, charMat, 0.12));
      const f = rbox(0.9, 1.62, 0.08, i === 1 ? redMat : whiteMat, 0.1);
      f.position.z = 0.04;
      g.add(f);
      const track = rbox(0.76, 0.06, 0.04, greyMat, 0.02);
      track.position.set(0, 0.7, 0.1);
      g.add(track);
      const fillGeo = new RoundedBoxGeometry(0.76, 0.06, 0.05, 2, 0.02);
      fillGeo.translate(0.38, 0, 0);
      const fill = new THREE.Mesh(fillGeo, i === 1 ? whiteMat : redMat);
      fill.position.set(-0.38, 0.7, 0.13);
      g.add(fill);
      const av = rbox(0.24, 0.24, 0.05, i === 1 ? whiteMat : redMat, 0.08);
      av.position.set(-0.28, 0.45, 0.12);
      g.add(av);
      const blk = rbox(0.62, 0.62, 0.05, i === 1 ? whiteMat : greyMat, 0.1);
      blk.position.set(0, -0.2, 0.12);
      g.add(blk);
      stage.add(g);
      return { g, fill, i };
    });

    /* ---------- Rising likes ---------- */
    const likes = [0, 1, 2, 3, 4].map((i) => {
      const h = new THREE.Mesh(heartGeo, redMat);
      stage.add(h);
      return { h, i };
    });
    const cx = STEP_X0 + 5 * STEP_DX;

    /* ---------- Hover spray ---------- */
    const SP = 14;
    const spray = Array.from({ length: SP }, (_, i) => {
      const s = new THREE.Mesh(heartGeo, i % 3 ? redMat : charMat);
      s.visible = false;
      stage.add(s);
      const ang = Math.PI / 2 + ((i / (SP - 1)) - 0.5) * 2.2;
      const sp = 3 + (i % 4) * 0.8;
      return { s, v: new THREE.Vector3(Math.cos(ang) * sp, Math.sin(ang) * sp, 1 + (i % 3) * 0.4) };
    });
    let burstAt = -1e9;
    const burst = () => { burstAt = performance.now(); };

    /* ---------- Pointer + hover ---------- */
    const ptr = { x: 0, y: 0 };
    let hovering = false, hv = 0;
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
      const time = reduceMotion ? DURATION * 0.8 * 1000 : ms;
      const u = ((time / 1000) % DURATION) / DURATION;
      const a = u * TAU;
      const out = 1 - smooth(0.9, 1, u);

      hv += ((hovering ? 1 : 0) - hv) * Math.min(1, dt * 6);
      camera.position.z = 26 - 2 * hv;
      camera.lookAt(0, 0.3, 0);
      stage.rotation.set(0.2 + ptr.y * 0.16 * hv, -0.5 + ptr.x * 0.3 + 0.05 * Math.sin(a), 0);
      stage.scale.setScalar(1 + 0.03 * hv);
      key.intensity = 1 + 0.6 * hv;
      rim.intensity = 0.8 + 0.7 * hv;
      redMat.emissiveIntensity = 1 + 1.3 * hv;

      // steps grow one by one; hover sends a wave up the stairs
      steps.forEach(({ body, cap, h, figs, i }) => {
        const g = smooth(0.04 + i * 0.07, 0.2 + i * 0.07, u) * out;
        const wave = 0.5 + 0.5 * Math.sin(ms * 0.006 - i * 0.9);
        const sh = Math.max(h * g * (1 + 0.1 * hv * wave), 0.001);
        body.scale.y = sh;
        cap.position.set(body.position.x, BASE_Y + sh + 0.06, 0);
        figs.forEach((f) => {
          const { x, z, k } = f.userData;
          const t0 = 0.2 + i * 0.07 + k * 0.03;
          const d = smooth(t0, t0 + 0.08, u) * out;
          const e = 1 - Math.pow(1 - d, 3);
          f.position.set(x, BASE_Y + sh + 0.12 + (1 - e) * 2.4 + hv * 0.08 * Math.abs(Math.sin(ms * 0.008 + k + i)), z);
          f.scale.setScalar(Math.max(e, 0.0001));
        });
      });

      // creator pops in, hops on hover, faces the pointer
      const cp = smooth(0.5, 0.62, u) * out;
      creator.scale.setScalar(Math.max(cp, 0.0001));
      creator.position.y = topY + hv * 0.35 * Math.abs(Math.sin(ms * 0.007)) + 0.05 * Math.sin(a * 2);
      creator.rotation.y = 0.15 * Math.sin(a) + ptr.x * 0.5 * hv;
      seal.scale.setScalar(Math.max(smooth(0.62, 0.72, u) * out * (1 + 0.1 * Math.sin(a * 6)), 0.0001));
      seal.position.y = 2.0 + 0.08 * Math.sin(a * 2 + 1);
      phone.rotation.z = 0.2 + 0.08 * Math.sin(a * 2);
      rec.visible = Math.sin(a * 8) > -0.2;

      // cards slide in along the diagonal; hover pushes them toward you
      cards.forEach((c, i) => {
        const p = smooth(0.12 + i * 0.1, 0.32 + i * 0.1, u) * out;
        c.g.position.set(c.x - 2.2 * (1 - p) - hv * 0.25 * i, c.y - 1.2 * (1 - p) + 0.08 * Math.sin(a * 2 + i * 2), c.z + hv * (0.5 + i * 0.4));
        c.g.scale.setScalar(Math.max(0.6 + 0.4 * p, 0.0001));
        c.g.rotation.y = 0.12 * Math.sin(a * 2 + i) + ptr.x * 0.15 * hv;
        c.h.scale.setScalar(0.2 * (1 + 0.25 * Math.max(0, Math.sin(a * 4 + i * 2))) * (1 + 0.5 * hv));
      });

      // story progress bars fill in sequence
      stories.forEach(({ g, fill, i }) => {
        const p = smooth(0.4 + i * 0.06, 0.55 + i * 0.06, u) * out;
        g.scale.setScalar(Math.max(0.6 + 0.4 * p, 0.0001));
        g.position.y = 4.7 + 0.08 * Math.sin(a * 2 + i);
        g.rotation.y = 0.1 * Math.sin(a * 2 + i);
        const t = (u * 3 + i * 0.25) % 1;
        fill.scale.x = Math.max(t, 0.001) * (0.4 + 0.6 * p);
      });

      // likes rise in straight lines above the creator
      likes.forEach(({ h, i }) => {
        const t = (u * 3 + i / 5) % 1;
        h.position.set(cx + 0.2 + Math.sin(i * 2.1) * 0.7 + 0.3 * Math.sin(t * 6), topY + 2.4 + t * 3.0, 0.5);
        h.scale.setScalar(0.34 * Math.sin(Math.PI * t) * smooth(0.6, 0.7, u) * out * (1 + 0.4 * hv) + 0.0001);
        h.rotation.z = 0.3 * Math.sin(t * 8 + i);
      });

      const e = (performance.now() - burstAt) / 1300;
      spray.forEach(({ s, v }, i) => {
        if (e < 0 || e >= 1) { s.visible = false; return; }
        s.visible = true;
        const k = 1 - Math.pow(1 - e, 2);
        s.position.set(cx + v.x * k * 0.8, topY + 1.8 + v.y * k * 0.8, 0.5 + v.z * k * 0.6);
        s.scale.setScalar(0.3 * Math.sin(Math.PI * Math.min(1, e * 1.05)) + 0.0001);
        s.rotation.z = 0.5 * Math.sin(i + e * 6);
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
      className="aspect-square w-full max-w-[560px] cursor-pointer"
      role="img"
      aria-label="Animated 3D illustration of influencer marketing: a creator on a growing follower staircase with post cards, stories and likes"
    />
  );
};

export default InfluencerStaircaseVisual;