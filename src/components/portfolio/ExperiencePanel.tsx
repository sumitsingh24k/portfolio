import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaEye from "@/assets/manga-eye.png";
import mangaSlash from "@/assets/manga-slash.png";
import mangaKick from "@/assets/manga-kick.png";
import mangaFinisher from "@/assets/manga-finisher.png";

const EXPERIENCE = [
  {
    role: "Software Developer (Consultant)",
    company: "The Sibling Corp",
    period: "Sep 2025 – Dec 2025",
    enemy: "MIDDLEMEN",
    sfx: "BREAK!",
    points: [
      "Built Quick Basket — a full-stack platform connecting farmers directly to buyers, eliminating middlemen.",
      "Developed and debugged a scalable end-to-end app using Node.js, MongoDB, React Native.",
    ],
    stack: ["Node.js", "MongoDB", "React Native"],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Growigh",
    period: "Jul 2025 – Sep 2025",
    enemy: "BAD UX",
    sfx: "POLISH!",
    points: [
      "Designed clean, intuitive UI to showcase inventory and boost user engagement.",
      "Built fully responsive layouts spanning desktop and mobile.",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
  },
];

/** Animated slash overlay that wipes across the panel. */
const SlashOverlay = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, times: [0, 0.2, 0.8, 1] }}
    className="absolute inset-0 pointer-events-none origin-left z-30"
  >
    <div
      className="absolute top-1/2 left-0 right-0 h-[6px] -translate-y-1/2 bg-ink"
      style={{ transform: "translateY(-50%) skewY(-12deg)" }}
    />
  </motion.div>
);

/** Mini storyboard frame inside the fight strip. */
const FightFrame = ({
  src,
  alt,
  sfx,
  rotate = 0,
  delay = 0,
  className = "",
  shake = false,
}: {
  src: string;
  alt: string;
  sfx?: string;
  rotate?: number;
  delay?: number;
  className?: string;
  shake?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, rotate: rotate - 6 }}
      animate={inView ? { opacity: 1, scale: 1, rotate } : {}}
      transition={{ duration: 0.45, delay, ease: [0.2, 1.4, 0.4, 1] }}
      className={`relative border-[3px] border-ink bg-paper-light shadow-[5px_5px_0_0_hsl(var(--ink))] overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 halftone opacity-[0.08] pointer-events-none" />
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        width={1024}
        height={1024}
        animate={shake && inView ? { x: [0, -2, 2, -1, 1, 0], y: [0, 1, -1, 1, 0] } : {}}
        transition={{ duration: 0.4, delay: delay + 0.2, repeat: 1 }}
      />
      <SlashOverlay delay={delay + 0.25} />
      {sfx && (
        <SFX
          text={sfx}
          rotate={-10 + Math.random() * 20}
          className="absolute bottom-1 right-1 text-xl md:text-2xl"
        />
      )}
    </motion.div>
  );
};

export const ExperiencePanel = () => {
  return (
    <MangaPanel label="Battles" className="md:col-span-12 relative overflow-hidden">
      {/* Speedlines background that activate on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 speedlines pointer-events-none"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-end justify-between gap-3 mb-5 flex-wrap">
          <div>
            <p className="handwritten text-xs uppercase tracking-[0.3em] text-ink-muted">
              // Arc 02 · The Battles Fought
            </p>
            <h2 className="display-font text-4xl md:text-6xl text-ink leading-none mt-1">
              EXPERIENCE
            </h2>
          </div>
          <SFX text="FIGHT!" className="text-3xl md:text-5xl" rotate={-8} />
        </div>

        {/* Fight sequence storyboard strip */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6 h-32 md:h-44">
          <FightFrame
            src={mangaEye}
            alt="Determined eye close-up"
            sfx="DOKI"
            delay={0}
            rotate={-1}
          />
          <FightFrame
            src={mangaSlash}
            alt="Sword slash attack"
            sfx="SLASH!"
            delay={0.15}
            rotate={1}
            shake
          />
          <FightFrame
            src={mangaKick}
            alt="Jumping kick attack"
            sfx="BAM!"
            delay={0.3}
            rotate={-1}
            shake
          />
          <FightFrame
            src={mangaFinisher}
            alt="Victorious warrior"
            sfx="VICTORY"
            delay={0.45}
            rotate={1}
          />
        </div>

        {/* Role cards as battle reports */}
        <div className="grid md:grid-cols-2 gap-4">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              whileHover={{ y: -3 }}
              className="relative border-[3px] border-ink bg-paper p-4 shadow-[6px_6px_0_0_hsl(var(--ink))] hover:shadow-[9px_9px_0_0_hsl(var(--ink))] transition-shadow group"
            >
              {/* Battle report header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b-[3px] border-ink border-dashed">
                <span className="display-font text-xs bg-ink text-paper-light px-2 py-0.5 tracking-widest">
                  BATTLE №0{i + 1}
                </span>
                <span className="handwritten text-[10px] text-ink-muted">{exp.period}</span>
              </div>

              {/* VS panel */}
              <div className="flex items-center gap-2 mb-3">
                <div className="display-font text-2xl text-ink leading-none">
                  ME
                </div>
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                  className="display-font text-3xl text-accent leading-none"
                >
                  VS
                </motion.span>
                <div className="display-font text-2xl text-ink leading-none flex-1 truncate">
                  {exp.enemy}
                </div>
                <SFX text={exp.sfx} rotate={-6} className="text-xl md:text-2xl shrink-0" />
              </div>

              <h3 className="display-font text-xl md:text-2xl text-ink leading-tight">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold text-ink-soft mb-2">{exp.company}</p>

              <ul className="space-y-1.5 mb-3">
                {exp.points.map((p, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + i * 0.15 + j * 0.08 }}
                    className="text-sm text-ink-soft pl-4 relative leading-snug"
                  >
                    <span className="absolute left-0 top-2 w-2 h-0.5 bg-accent" />
                    {p}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-dotted border-ink/30">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-wider font-bold border-2 border-ink px-1.5 py-0.5 bg-paper-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Result stamp */}
              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                whileInView={{ scale: 1, rotate: -15 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + i * 0.15, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 display-font text-xs bg-accent text-paper-light border-[2px] border-ink px-2 py-1 tracking-widest shadow-[3px_3px_0_0_hsl(var(--ink))]"
              >
                ★ WIN ★
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </MangaPanel>
  );
};
