import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaVictor from "@/assets/manga-victor.png";

const PROJECTS = [
  {
    title: "JanSetu Health System",
    tagline: "Voice-to-Map Rural Disease Surveillance",
    stack: ["Next.js", "MongoDB", "Gemini", "NLP", "RAG", "OpenStreetMap"],
    points: [
      "ASHA health workers speak field reports; a custom NLP parser extracts disease entities and case counts, and a live map updates with risk zones, trends, and outbreak alerts — replacing days of manual HQ reporting across 8 MongoDB collections, 26 API routes, and 4 user roles.",
      "A correlation engine cross-checks two independent, imperfect data streams — worker-reported cases vs. actual medicine movement at local shops — flagging outbreaks and under-reporting that neither source catches alone; divergence auto-generates “go survey this village” alerts.",
      "LLM health chatbot (Gemini + RAG retrieval) guides residents to OTC medicines and reserves them at nearby pharmacies via 4-digit pickup codes; prescription photos are read by Gemini vision with structured JSON output.",
      "Every safety-critical decision — emergency detection, OTC/RX gating, risk scoring — is deterministic code. Remove the Gemini key and the whole app still works with lexical-only search.",
    ],
    github: "https://github.com/sumitsingh24k/Health_Jansetu",
    live: "https://health-jansetu.vercel.app/",
  },
  {
    title: "AI Document Assist",
    tagline: "Gov Scheme Eligibility + Form Auto-Fill",
    stack: ["React", "Node.js", "Express", "MongoDB", "Python", "Gemini", "Tesseract OCR", "Chrome MV3"],
    points: [
      "Hybrid document-extraction pipeline — Gemini vision first, escalating to Tesseract OCR + 25 regex extractors, then a Gemini text fallback over the OCR output — parsing 6 government document types into 31 canonical fields.",
      "Min-of-token confidence scoring, so a single wrong character invalidates a structured ID rather than silently passing through.",
      "7-signal weighted eligibility engine (occupation, eligibility rules, state, demographics) with Gemini re-ranking the top matches and the deterministic ranking retained as fallback; a Python crawler with a circuit-breaker rate limiter syncs the MyScheme catalogue.",
      "Chrome MV3 extension replays AI-generated field mappings to auto-fill multi-step government forms end-to-end — final submission always user-controlled — across 23 JWT-protected Express routes with Cloudinary document storage.",
    ],
    github: "https://github.com/sumitsingh24k/AI_Document_Assist",
    live: "https://ai-document-assist.vercel.app/",
  },
  {
    title: "Adzap",
    tagline: "AI Ad Campaign Platform",
    stack: ["React", "Python", "Node.js", "Generative AI", "ETL"],
    points: [
      "Full-stack ad platform with role-based access control, audience segmentation, and an AI creative generation engine — 75% faster creative production.",
      "ETL analytics dashboard that improved campaign ROI tracking by 50%.",
    ],
    github: "https://github.com/sumitsingh24k/Adzap_final",
  },
];

export const ProjectsPanel = () => {
  return (
    <MangaPanel label="Projects" className="md:col-span-12 relative">
      <div className="flex items-end justify-between gap-3 mb-5 flex-wrap">
        <div>
          <p className="handwritten text-xs uppercase tracking-[0.3em] text-ink-muted">
            // Arc 03 · Things I Shipped
          </p>
          <h2 className="display-font text-3xl md:text-5xl text-ink mt-1">Projects Forged</h2>
        </div>
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

      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col border-[3px] border-ink bg-paper-light p-4 shadow-[5px_5px_0_0_hsl(var(--ink))] hover:shadow-[8px_8px_0_0_hsl(var(--ink))] transition-shadow"
          >
            {(p.github || p.live) && (
              <div className="absolute top-2 right-2 display-font text-xs bg-ink text-paper-light px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                OPEN!
              </div>
            )}
            <div className="display-font text-xs text-ink-muted">No. 0{i + 1}</div>
            <h3 className="display-font text-2xl text-ink leading-tight mt-1 break-words">
              {p.title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-ink-soft font-semibold mt-1">
              {p.tagline}
            </p>

            <ul className="space-y-2 mt-3 flex-1">
              {p.points.map((point, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + j * 0.06 }}
                  className="text-sm text-ink-soft pl-4 relative leading-snug"
                >
                  <span className="absolute left-0 top-2 w-2 h-0.5 bg-accent" />
                  {point}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t-2 border-dotted border-ink/30">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-wider font-bold border-2 border-ink px-1.5 py-0.5 bg-paper"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(p.github || p.live) && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs md:text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-[2px] border-ink px-2.5 py-1 bg-paper hover:bg-ink hover:text-paper-light transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-[2px] border-ink px-2.5 py-1 bg-paper hover:bg-ink hover:text-paper-light transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </MangaPanel>
  );
};
