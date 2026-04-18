import { MangaPanel } from "./MangaPanel";
import { SFX } from "./SFX";
import mangaScholar from "@/assets/manga-scholar.png";

export const EducationPanel = () => {
  return (
    <MangaPanel label="Education" className="md:col-span-7 relative">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="col-span-2 space-y-4">
          <div>
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h3 className="display-font text-xl md:text-2xl text-ink">University of Mumbai</h3>
              <span className="handwritten text-xs text-ink-muted">Aug 2023 – Present</span>
            </div>
            <p className="text-sm text-ink-soft">B.Tech. in Artificial Intelligence & Data Science</p>
            <p className="text-sm font-semibold text-ink">CGPA: 8.5 / 10</p>
          </div>
          <div className="border-t-2 border-dashed border-ink/40 pt-3">
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h3 className="display-font text-lg md:text-xl text-ink">Maharashtra State Board</h3>
              <span className="handwritten text-xs text-ink-muted">2021 – 2023</span>
            </div>
            <p className="text-sm text-ink-soft">HSC · 70.17%</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={mangaScholar}
            alt="Manga scholar reading scroll"
            className="w-full h-auto object-contain"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <SFX text="LEARN!" className="absolute -top-3 -right-2 text-3xl md:text-4xl" rotate={-12} />
        </div>
      </div>
    </MangaPanel>
  );
};
