import { useEffect } from "react";
import Lenis from "lenis";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function useFullPageScroll({
  selector = "[data-section]",
  duration = 1.3,   // seconds, raise for a slower, silkier glide
  minWidth = 1024,  // full-page behavior on desktop only
  offset = 0,       // set to Navbar height if it's fixed
} = {}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia(`(min-width: ${minWidth}px)`).matches;
    if (reduceMotion) return;

    // Lenis smooths everything (touch + trackpad on mobile too)
    const lenis = new Lenis({
      duration: 1.2,
      easing: easeOutExpo,
      smoothWheel: !isDesktop, // on desktop we handle the wheel ourselves
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    if (!isDesktop) {
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    let locked = false;
    const getSections = () => Array.from(document.querySelectorAll(selector));
    const topOf = (el) => el.getBoundingClientRect().top + window.scrollY - offset;

    const currentIndex = () => {
      const list = getSections();
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) return list.length - 1;
      let idx = 0;
      list.forEach((el, i) => {
        if (topOf(el) <= window.scrollY + 5) idx = i;
      });
      return idx;
    };

    const goTo = (i) => {
      const list = getSections();
      const target = list[Math.max(0, Math.min(i, list.length - 1))];
      if (!target) return;
      locked = true;
      lenis.scrollTo(target, {
        offset: -offset,
        duration,
        easing: easeOutExpo,
        lock: true,
        onComplete: () => {
          // small cooldown so trackpad inertia doesn't trigger the next jump
          setTimeout(() => (locked = false), 150);
        },
      });
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < 8) return;
      const list = getSections();
      const i = currentIndex();
      const el = list[i];
      const dir = e.deltaY > 0 ? 1 : -1;

      // allow normal scrolling inside sections taller than the screen
      const top = topOf(el);
      const bottom = top + el.offsetHeight;
      const viewBottom = window.scrollY + window.innerHeight;
      if (dir === 1 && viewBottom < bottom - 5 && i < list.length - 1) return;
      if (dir === -1 && window.scrollY > top + 5) return;

      e.preventDefault();
      if (locked) return;
      goTo(i + dir);
    };

    const onKey = (e) => {
      const map = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 };
      if (!(e.key in map)) return;
      if (/input|textarea|select/i.test(e.target.tagName)) return;
      e.preventDefault();
      if (!locked) goTo(currentIndex() + map[e.key]);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [selector, duration, minWidth, offset]);
}