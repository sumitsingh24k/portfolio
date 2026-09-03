import { motion } from "framer-motion";
import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaCoder from "@/assets/manga-coder.png";

const SKILL_GROUPS = [
  {
    group: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++ (DSA)", "HTML", "CSS"],
  },
  {
    group: "ML / AI",
    skills: [
      "NLP Pipelines",
      "LLM Agents",
      "RAG Retrieval",
      "Prompt Engineering",
      "Structured Output",
      "Generative AI",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    group: "ML Libraries & Tools",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "NumPy",
      "pandas",
      "scikit-learn",
      "Tesseract OCR",
      "Playwright",
      "Jupyter / Colab",
    ],
  },
  {
    group: "Backend & Frameworks",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js",
      "REST APIs",
      "Microservices Concepts",
      "React.js",
      "React Native",
    ],
  },
  {
    group: "Databases & Infra",
    skills: ["MongoDB", "MongoDB Atlas", "Redis", "MySQL", "Connection Pooling", "Caching"],
  },
  {
    group: "Concepts & Tools",
    skills: [
      "Webhooks",
      "Rate Limiting",
      "Retry Logic",
      "Idempotency",
      "HMAC-SHA256",
      "AES-256-GCM",
      "Browser Automation",
      "Chrome MV3",
      "Git",
      "AI-Assisted Dev (Copilot, Claude)",
    ],
  },
];

export const SkillsPanel = () => {
  let index = 0;

  return (
    <MangaPanel label="Arsenal" className="md:col-span-12 relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/3 speedlines opacity-10 pointer-events-none" />
      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start relative">
        <div>
          <div className="flex items-end gap-3 mb-5">
            <h2 className="display-font text-3xl md:text-5xl text-ink">Technologies I Master!</h2>
            <SFX text="MASTERY!" className="text-2xl md:text-4xl" rotate={-6} />
          </div>

          <div className="space-y-4">
            {SKILL_GROUPS.map(({ group, skills }) => (
              <div key={group}>
                <p className="handwritten text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">
                  // {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const delay = (index++ % 20) * 0.03;
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.3 }}
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        className="border-[2px] border-ink bg-paper-light px-3 py-1.5 text-sm font-semibold text-ink cursor-default shadow-[3px_3px_0_0_hsl(var(--ink))]"
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={mangaCoder}
          alt="Manga coder with energy aura"
          className="w-40 md:w-56 h-auto object-contain md:sticky md:top-6"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>
    </MangaPanel>
  );
};
