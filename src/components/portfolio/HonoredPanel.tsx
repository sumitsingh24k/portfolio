import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaHonored from "@/assets/manga-honored.png";
import inkSplat from "@/assets/ink-splat.png";

export const HonoredPanel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yChar = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yText = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scaleSplat = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <div ref={ref} className="md:col-span-12">
      <MangaPanel
        label="Finale"
        variant="dark"
        className="relative !bg-ink !text-paper-light min-h-[460px] md:min-h-[560px] overflow-hidden p-0"
      >
        {/* Rotating speedlines */}
        <motion.div
          style={{ rotate: rotateBg }}
          className="absolute -inset-1/4 opacity-25 pointer-events-none"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, hsl(var(--paper-light)) 0 1.5px, transparent 1.5px 16px)",
            }}
          />
        </motion.div>

        {/* Halftone */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--paper-light)/0.6) 1.5px, transparent 1.6px)",
            backgroundSize: "8px 8px",
          }}
        />

        {/* Ink splat behind character */}
        <motion.img
          src={inkSplat}
          alt=""
          aria-hidden
          style={{ scale: scaleSplat }}
          className="absolute right-0 bottom-0 w-[60%] opacity-30 pointer-events-none invert"
          loading="lazy"
        />

        <div className="relative grid md:grid-cols-2 gap-6 items-center min-h-[460px] md:min-h-[560px] p-5 md:p-8">
          <motion.div style={{ y: yText }} className="z-10">
            <p className="handwritten text-xs uppercase tracking-[0.3em] text-paper-light/60 mb-2">
              // Final Chapter
            </p>
            <h2 className="display-font text-4xl md:text-6xl leading-[0.95]">
              Throughout heaven and earth…
            </h2>
            <p className="display-font text-3xl md:text-5xl text-sfx-red mt-3 leading-tight">
              I alone am ready to lead the engineering of the future.
            </p>
            <p className="mt-5 text-paper-light/70 max-w-md text-sm md:text-base">
              Calm mind. Sharp craft. Relentless shipping. Let's build the next
              chapter together.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-paper-light border-[3px] border-paper-light px-4 py-2 display-font tracking-widest text-sm shadow-[5px_5px_0_0_hsl(var(--paper-light))] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_0_hsl(var(--paper-light))] transition-all"
              >
                LET'S TALK →
              </a>
              <a
                href="https://github.com/sumitsingh24k"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-paper-light border-[3px] border-paper-light px-4 py-2 display-font tracking-widest text-sm hover:bg-paper-light hover:text-ink transition-colors"
              >
                CODE
              </a>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center">
            {/* Pulse rings */}
            <span className="absolute w-56 h-56 rounded-full border-2 border-accent animate-pulse-ring" />
            <span
              className="absolute w-56 h-56 rounded-full border-2 border-paper-light animate-pulse-ring"
              style={{ animationDelay: "0.8s" }}
            />

            <SFX
              text="IMPACT!"
              className="absolute top-2 right-2 md:top-6 md:right-6 text-4xl md:text-7xl z-20"
              rotate={10}
            />
            <motion.img
              src={mangaHonored}
              alt="Powerful manga character in finale pose"
              style={{ y: yChar }}
              className="relative z-10 max-h-[460px] w-auto object-contain drop-shadow-[8px_8px_0_hsl(var(--sfx-red))]"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </MangaPanel>
    </div>
  );
};
