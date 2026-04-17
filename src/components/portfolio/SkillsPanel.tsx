import { motion } from "framer-motion";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaCoder from "@/assets/manga-coder.png";

const SKILLS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React.js",
  "React Native",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Git",
  "Postman",
  "REST APIs",
];

export const SkillsPanel = () => {
  return (
    <MangaPanel label="Arsenal" className="md:col-span-12 relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/3 speedlines opacity-10 pointer-events-none" />
      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center relative">
        <div>
          <div className="flex items-end gap-3 mb-4">
            <h2 className="display-font text-3xl md:text-5xl text-ink">Technologies I Master!</h2>
            <SFX text="MASTERY!" className="text-2xl md:text-4xl" rotate={-6} />
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="border-[2px] border-ink bg-paper-light px-3 py-1.5 text-sm font-semibold text-ink cursor-default shadow-[3px_3px_0_0_hsl(var(--ink))]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        <img
          src={mangaCoder}
          alt="Manga coder with energy aura"
          className="w-40 md:w-56 h-auto object-contain"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>
    </MangaPanel>
  );
};
