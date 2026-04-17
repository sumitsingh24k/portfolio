import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaPoint from "@/assets/manga-point.png";

const STATS = [
  { value: 4, suffix: "×", label: "Hackathon Wins" },
  { value: 8.5, suffix: "/10", label: "CGPA", decimal: true },
  { value: 3, suffix: "+", label: "Shipped Projects" },
  { value: 2, suffix: "", label: "Dev Roles" },
];

const Counter = ({ to, decimal }: { to: number; decimal?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(eased * to);
      if (t < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return <span ref={ref}>{decimal ? val.toFixed(1) : Math.round(val)}</span>;
};

export const StatsPanel = () => {
  return (
    <MangaPanel label="Stats" className="md:col-span-7 relative overflow-hidden">
      <div className="absolute inset-0 halftone opacity-[0.06] pointer-events-none" />

      <div className="relative grid grid-cols-[1fr_auto] gap-4 items-center mb-4">
        <div>
          <h2 className="display-font text-3xl md:text-4xl text-ink leading-none">By the Numbers</h2>
          <p className="handwritten text-xs text-ink-muted mt-1">// Power level: rising</p>
        </div>
        <div className="relative">
          <img
            src={mangaPoint}
            alt="Manga character pointing"
            className="w-20 md:w-28 h-auto object-contain animate-float"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <SFX text="ZAP!" rotate={12} className="absolute -top-3 -right-2 text-2xl md:text-3xl" />
        </div>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-[2px] border-ink bg-paper p-3 shadow-[3px_3px_0_0_hsl(var(--ink))] text-center"
          >
            <div className="display-font text-3xl md:text-4xl text-ink leading-none">
              <Counter to={s.value} decimal={s.decimal} />
              <span className="text-accent">{s.suffix}</span>
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-wider text-ink-muted mt-1">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </MangaPanel>
  );
};
