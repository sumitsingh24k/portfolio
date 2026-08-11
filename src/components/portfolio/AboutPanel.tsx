import { MangaPanel } from "./MangaPanel";

export const AboutPanel = () => {
  return (
    <MangaPanel label="Summary" className="md:col-span-7 relative">
      <div className="absolute inset-0 halftone-light opacity-40 pointer-events-none" />
      <div className="relative">
        <p className="display-font text-2xl md:text-3xl text-ink leading-tight">
          AI & Data Science undergrad building ML products.
        </p>
        <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
          AI & Data Science undergrad (CGPA 8.6/10) with 3 internships and 3
          shipped products across the ML product stack: NLP and speech
          pipelines, LLM-agent automation, generative-AI features, and the
          data/backend infrastructure that serves them at production traffic.
          600+ DSA problems, 4x hackathon winner, GDSC Technical Head. Seeking
          a Deep Learning / ML Engineer internship in LLMs and vision-language
          systems.
        </p>
        <p className="mt-3 handwritten text-sm text-ink">
          Let's build something extraordinary together.
        </p>
      </div>
    </MangaPanel>
  );
};
