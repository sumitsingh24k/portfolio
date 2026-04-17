import { MangaPanel } from "./MangaPanel";

export const AboutPanel = () => {
  return (
    <MangaPanel label="About" className="md:col-span-7 relative">
      <div className="absolute inset-0 halftone-light opacity-40 pointer-events-none" />
      <div className="relative">
        <p className="display-font text-2xl md:text-3xl text-ink leading-tight">
          “Highly focused IT Engineer & passionate developer.”
        </p>
        <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
          I possess a calm yet eager mind, dedicated to building scalable,
          high-impact technical solutions. From full-stack platforms to
          intelligent automation — I ship products that matter.
        </p>
        <p className="mt-3 handwritten text-sm text-ink">
          Let's build something extraordinary together.
        </p>
      </div>
    </MangaPanel>
  );
};
