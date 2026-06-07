import { motion } from "framer-motion";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaVictor from "@/assets/manga-victor.png";

const PROJECTS = [
  {
    title: "JanSetu Health System",
    tagline: "Voice-to-Map Outbreak Detection",
    stack: "React · Node.js · MongoDB · Python · Google Maps · Twilio",
    desc: "ASHA workers speak case reports; NLP extracts disease + location and a real-time map updates instantly. ML predicts outbreaks at 85% accuracy, cutting medication stockouts by 60%. Processes 1,000+ daily voice entries at 98% transcription accuracy.",
  },
  {
    title: "Gov Assist",
    tagline: "AI Gov Form Auto-Fill (Chrome Ext.)",
    stack: "React · Vite · Chrome Extensions API · MyScheme · Twilio",
    desc: "Matches user documents against MyScheme government API (92% accuracy) and auto-fills applications via a prompt-engineered AI agent — 80% reduction in completion time. Real-time extension-to-webapp sync with WhatsApp/SMS alerts.",
  },
  {
    title: "Adzap",
    tagline: "AI Ad Campaign Platform",
    stack: "React · Python · Node.js · Generative AI · ETL",
    desc: "Full-stack ad platform with RBAC, audience segmentation and an AI creative generation engine — 75% faster production. ETL analytics dashboard improved campaign ROI tracking by 50%.",
  },
];

export const ProjectsPanel = () => {
  return (
    <MangaPanel label="Projects" className="md:col-span-12 relative">
      <div className="flex items-end justify-between gap-3 mb-5 flex-wrap">
        <h2 className="display-font text-3xl md:text-5xl text-ink">Projects Forged</h2>
        <div className="relative flex items-center gap-3">
          <SFX text="CREATE!" className="text-2xl md:text-4xl" rotate={-6} />
          <img
            src={mangaVictor}
            alt="Victorious manga character"
            className="w-20 md:w-28 h-auto object-contain"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative border-[3px] border-ink bg-paper-light p-4 shadow-[5px_5px_0_0_hsl(var(--ink))] hover:shadow-[8px_8px_0_0_hsl(var(--ink))] transition-shadow cursor-pointer"
          >
            <div className="absolute top-2 right-2 display-font text-xs bg-ink text-paper-light px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              CLICK ME!
            </div>
            <div className="display-font text-xs text-ink-muted">№ 0{i + 1}</div>
            <h3 className="display-font text-2xl text-ink leading-tight mt-1">{p.title}</h3>
            <p className="text-xs uppercase tracking-wider text-ink-soft font-semibold mt-1">
              {p.tagline}
            </p>
            <p className="text-xs handwritten text-ink-muted mt-2">{p.stack}</p>
            <p className="text-sm text-ink-soft mt-3 leading-snug">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </MangaPanel>
  );
};
