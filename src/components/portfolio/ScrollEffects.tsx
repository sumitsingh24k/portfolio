import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/** Floating progress indicator + scroll-triggered side character. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1.5 bg-accent origin-left z-[60] border-b-2 border-ink"
    />
  );
};

/** Manga-style cursor trail of small ink dots. */
export const InkCursor = () => {
  const [points, setPoints] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let id = 0;
    const handler = (e: MouseEvent) => {
      const next = { x: e.clientX, y: e.clientY, id: id++ };
      setPoints((p) => [...p.slice(-8), next]);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[55] hidden md:block">
      {points.map((p, i) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6 }}
          className="absolute w-2 h-2 rounded-full bg-ink"
          style={{ left: p.x - 4, top: p.y - 4, opacity: (i + 1) / points.length }}
        />
      ))}
    </div>
  );
};
