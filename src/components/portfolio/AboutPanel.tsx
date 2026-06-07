import { MangaPanel } from "./MangaPanel";

export const AboutPanel = () => {
  return (
    <MangaPanel label="About" className="md:col-span-7 relative">
      <div className="absolute inset-0 halftone-light opacity-40 pointer-events-none" />
      <div className="relative">
        <p className="display-font text-2xl md:text-3xl text-ink leading-tight">
          “Backend systems by day, DSA by night.”
        </p>
        <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
          Currently building crypto wallet auth and gift-card rewards infra at
          SwapSo while finishing B.E. in IT (AI & DS) at University of Mumbai.
          3 internships, 3 shipped products, and 600+ DSA problems solved. Open
          to full-time SDE roles in fintech, healthtech, or high-growth product
          teams.
        </p>
        <p className="mt-3 handwritten text-sm text-ink">
          Let's build something extraordinary together.
        </p>
      </div>
    </MangaPanel>
  );
};
