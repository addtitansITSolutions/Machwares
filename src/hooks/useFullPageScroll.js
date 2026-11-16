
import { useEffect } from "react";
import Lenis from "lenis";

const easeOutExpo = (t) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export default function useFullPageScroll({
  selector = "[data-section]",
  duration = 1.3,
  minWidth = 1024,
  offset = 0,
} = {}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const isDesktop = window.matchMedia(
      `(min-width: ${minWidth}px)`
    ).matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: easeOutExpo,
      smoothWheel: !isDesktop,
      smoothTouch: false,
    });

    let rafId;
    let locked = false;
    let unlockTimer;

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

    const getSections = () =>
      Array.from(document.querySelectorAll(selector));

    const getTop = (element) =>
      element.getBoundingClientRect().top + window.scrollY;

    const getCurrentIndex = () => {
      const sections = getSections();

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        return sections.length - 1;
      }

      let index = 0;

      sections.forEach((section, i) => {
        if (getTop(section) <= window.scrollY + offset + 5) {
          index = i;
        }
      });

      return index;
    };

    const goToSection = (index) => {
      const sections = getSections();

      const target = sections[
        Math.max(0, Math.min(index, sections.length - 1))
      ];

      if (!target) return;

      locked = true;

      clearTimeout(unlockTimer);

      lenis.scrollTo(target, {
        offset: -offset,
        duration,
        easing: easeOutExpo,
        lock: true,
        onComplete: () => {
          unlockTimer = setTimeout(() => {
            locked = false;
          }, 180);
        },
      });
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) < 8) return;

      const sections = getSections();
      const index = getCurrentIndex();
      const currentSection = sections[index];

      if (!currentSection) return;

      const direction = event.deltaY > 0 ? 1 : -1;

      const sectionTop = getTop(currentSection);
      const sectionBottom =
        sectionTop + currentSection.offsetHeight;

      const viewportBottom =
        window.scrollY + window.innerHeight;

      // Allow normal scrolling inside tall sections.
      if (
        direction > 0 &&
        viewportBottom < sectionBottom - 5 &&
        index < sections.length - 1
      ) {
        return;
      }

      if (
        direction < 0 &&
        window.scrollY > sectionTop + offset + 5
      ) {
        return;
      }

      event.preventDefault();

      if (locked) return;

      goToSection(index + direction);
    };

    const onKeyDown = (event) => {
      const directions = {
        ArrowDown: 1,
        PageDown: 1,
        ArrowUp: -1,
        PageUp: -1,
      };

      const direction = directions[event.key];

      if (!direction) return;

      if (
        event.target.closest(
          "input, textarea, select, button, a, [contenteditable='true']"
        )
      ) {
        return;
      }

      if (event.altKey || event.ctrlKey || event.metaKey) return;

      const sections = getSections();
      const index = getCurrentIndex();
      const currentSection = sections[index];

      if (!currentSection) return;

      const sectionTop = getTop(currentSection);
      const sectionBottom =
        sectionTop + currentSection.offsetHeight;

      const viewportBottom =
        window.scrollY + window.innerHeight;

      // Preserve normal keyboard scrolling inside tall sections.
      if (
        direction > 0 &&
        viewportBottom < sectionBottom - 5 &&
        index < sections.length - 1
      ) {
        return;
      }

      if (
        direction < 0 &&
        window.scrollY > sectionTop + offset + 5
      ) {
        return;
      }

      event.preventDefault();

      if (!locked) {
        goToSection(index + direction);
      }
    };

    window.addEventListener("wheel", onWheel, {
      passive: false,
    });

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);

      clearTimeout(unlockTimer);
      cancelAnimationFrame(rafId);

      lenis.destroy();
    };
  }, [selector, duration, minWidth, offset]);
}
