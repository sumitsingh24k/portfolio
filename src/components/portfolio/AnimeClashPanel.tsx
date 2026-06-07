import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import animeZoro from "@/assets/anime-zoro.jpg";
import animeLuffy from "@/assets/anime-luffy.jpg";
import animeNaruto from "@/assets/anime-naruto.jpg";
import animeSasuke from "@/assets/anime-sasuke.jpg";

/** Special crossover chapter — the anime energy behind the code. */
const FIGHTERS = [
  { name: "Zoro", move: "Santoryu · Onigiri", sfx: "ZAN!!!", img: animeZoro, accent: "#e23b2e", rotate: -2 },
  { name: "Luffy", move: "Gear 5 · Bajrang Gun", sfx: "DON!!!", img: animeLuffy, accent: "#f2c014", rotate: 1.5 },
  { name: "Naruto", move: "Sage · Rasengan", sfx: "GOOO!!!", img: animeNaruto, accent: "#2a7de1", rotate: -1.5 },
  { name: "Sasuke", move: "Chidori · Kirin", sfx: "BZZT!!!", img: animeSasuke, accent: "#8b3fd6", rotate: 2 },
];

const ClashCard = ({
  fighter,
  index,
}: {
  fighter: (typeof FIGHTERS)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.85, rotate: fighter.rotate - 6 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: fighter.rotate } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.2, 1.3, 0.4, 1] }}
      whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
      className="relative border-[3px] border-ink bg-paper-light p-1.5 shadow-[6px_6px_0_0_hsl(var(--ink))]"
    >
      {/* Image frame */}
      <div className="relative aspect-[3/4] overflow-hidden border-2 border-ink bg-paper">
        <div className="absolute inset-0 halftone opacity-[0.08] pointer-events-none z-10" />

        {failed ? (
          /* Safety net if the image ever fails to load */
          <div
            className="absolute inset-0 flex items-center justify-center speedlines"
            style={{ background: `radial-gradient(circle at 50% 40%, ${fighter.accent}22, transparent 70%)` }}
          >
            <span className="display-font text-5xl md:text-6xl" style={{ color: fighter.accent }}>
              {fighter.name[0]}
            </span>
          </div>
        ) : (
          <img
            src={fighter.img}
            alt={`${fighter.name} in action`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}

        {/* Number badge */}
        <span className="absolute top-1.5 left-1.5 z-20 display-font text-[10px] bg-ink text-paper-light px-1.5 py-0.5 tracking-widest">
          №0{index + 1}
        </span>

        {/* SFX burst */}
        <SFX
          text={fighter.sfx}
          rotate={-8 + index * 4}
          className="absolute top-2 right-1 z-20 text-2xl md:text-3xl !text-accent"
        />

        {/* Caption bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-ink/90 text-paper-light px-2.5 py-1.5">
          <p className="display-font text-base md:text-lg leading-none tracking-wide">
            {fighter.name}
          </p>
          <p className="handwritten text-[10px] md:text-xs text-paper-light/70 mt-0.5">
            {fighter.move}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const AnimeClashPanel = () => {
  return (
    <MangaPanel label="Clash" className="md:col-span-12 relative overflow-hidden">
      {/* Speedline + faint warm wash background */}
      <div className="absolute inset-0 speedlines opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/[0.06] to-transparent pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <p className="handwritten text-xs uppercase tracking-[0.3em] text-ink-muted">
              // Arc 03 · Special Crossover Chapter
            </p>
            <h2 className="display-font text-4xl md:text-6xl text-ink leading-none mt-1">
              ANIME <span className="text-accent">CLASH</span>
            </h2>
            <p className="text-sm text-ink-soft mt-2 max-w-md">
              The energy I bring to code — drawn the only way it makes sense.
            </p>
          </div>
          <SFX text="GO!!!" rotate={-6} className="text-3xl md:text-5xl shrink-0" />
        </div>

        {/* Fighter cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {FIGHTERS.map((fighter, i) => (
            <ClashCard key={fighter.name} fighter={fighter} index={i} />
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-5 flex items-center justify-between gap-3 flex-wrap border-t-2 border-dashed border-ink/40 pt-3">
          <p className="handwritten text-sm text-ink">
            "Four legends. One coder. Infinite power-ups."
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 display-font text-xs tracking-widest bg-ink text-paper-light px-3 py-1.5 hover:bg-accent transition-colors"
          >
            TO BE CONTINUED →
          </a>
        </div>
      </div>
    </MangaPanel>
  );
};
