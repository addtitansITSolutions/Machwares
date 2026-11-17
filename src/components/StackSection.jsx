import { useEffect, useRef, useState } from "react";

const StackSection = ({ children, zIndex = 1, sticky = true, className = "" }) => {
  const ref = useRef(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!sticky) return;
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const h = el.offsetHeight;
      const vh = window.innerHeight;
      // taller than screen: pin when its bottom reaches the viewport bottom
      setTop(h > vh ? vh - h : 0);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [sticky]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: sticky ? "sticky" : "relative",
        top: sticky ? top : undefined,
        zIndex,
      }}
    >
      {children}
    </div>
  );
};

export default StackSection;