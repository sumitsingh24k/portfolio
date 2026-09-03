import { MangaPanel } from "./MangaPanel";

export const AboutPanel = () => {
  return (
    <MangaPanel label="Summary" className="md:col-span-7 relative">
      <div className="absolute inset-0 halftone-light opacity-40 pointer-events-none" />
      <div className="relative">
        <p className="display-font text-2xl md:text-3xl text-ink leading-tight">
          I build the backend that carries production traffic — and the AI that
          rides on top of it.
        </p>
        <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
          Software engineer pursuing a B.Tech in AI &amp; Data Science (CGPA
          8.6/10) with 3 internships across backend systems, full-stack apps,
          and applied AI. Most recently I built production infrastructure at
          SwapSo — OTP authentication, event-driven webhooks, and idempotent
          payment flows on Node.js, MongoDB, and Redis. Alongside that, I ship
          the full ML stack: NLP pipelines, LLM agents, RAG systems, and
          document-extraction pipelines.
        </p>
        <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
          My rule for every AI feature: <span className="font-semibold text-ink">rules
          decide, the model only speaks.</span> Deterministic logic first, LLM on
          top, schema validation around the output — pull the model's API key and
          the product still works.
        </p>
        <p className="mt-3 handwritten text-sm text-ink">
          600+ DSA problems · 4x hackathon winner · GDSC Technical Head.
        </p>
      </div>
    </MangaPanel>
  );
};
