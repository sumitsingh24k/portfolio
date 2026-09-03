import { HeaderPanel } from "@/components/portfolio/HeaderPanel";
import { AboutPanel } from "@/components/portfolio/AboutPanel";
import { EducationPanel } from "@/components/portfolio/EducationPanel";
import { SkillsPanel } from "@/components/portfolio/SkillsPanel";
import { ExperiencePanel } from "@/components/portfolio/ExperiencePanel";
import { ProjectsPanel } from "@/components/portfolio/ProjectsPanel";
import { AnimeClashPanel } from "@/components/portfolio/AnimeClashPanel";
import { ImpactPanel } from "@/components/portfolio/ImpactPanel";
import { HonoredPanel } from "@/components/portfolio/HonoredPanel";
import { ContactPanel } from "@/components/portfolio/ContactPanel";
import { StatsPanel } from "@/components/portfolio/StatsPanel";
import { ManifestoPanel } from "@/components/portfolio/ManifestoPanel";
import { Marquee } from "@/components/portfolio/Marquee";
import { ScrollProgress, InkCursor } from "@/components/portfolio/ScrollEffects";

const Index = () => {
  return (
    <main className="paper-page-texture min-h-screen text-ink relative">
      <ScrollProgress />
      <InkCursor />

      {/* Top scrolling marquee */}
      <Marquee
        items={[
          "SUMIT SINGH",
          "SOFTWARE DEVELOPMENT ENGINEER",
          "BACKEND · APPLIED AI",
          "SHIP FAST",
          "BUILD BOLD",
          "MUMBAI · INDIA",
        ]}
      />

      <div className="container max-w-7xl py-8 md:py-12">
        <header className="mb-6 flex items-baseline justify-between">
          <p className="handwritten text-xs md:text-sm text-ink-muted">
            Vol. 01 · Issue 2026 · Manga × Code
          </p>
          <p className="display-font text-sm tracking-widest">// PORTFOLIO //</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-auto">
          <HeaderPanel />
          <AboutPanel />
          <EducationPanel />
          <StatsPanel />
          <SkillsPanel />
          <ExperiencePanel />
          <ProjectsPanel />
          <AnimeClashPanel />
          <ImpactPanel />
          <ManifestoPanel />
          <HonoredPanel />
          <ContactPanel />
        </section>
      </div>

      {/* Bottom reverse marquee */}
      <Marquee
        reverse
        variant="accent"
        items={[
          "OPEN TO FULL-TIME SDE / AI-ML ROLES",
          "OPEN TO COLLABS",
          "NODE · TYPESCRIPT · MONGODB · REDIS",
          "NLP · LLM AGENTS · RAG",
          "LET'S BUILD",
          "DRAWN WITH INK",
          "SHIPPED WITH CODE",
        ]}
      />

      <footer className="text-center handwritten text-xs text-ink-muted py-6">
        © {new Date().getFullYear()} Sumit Singh · Drawn with ink, shipped with code.
      </footer>
    </main>
  );
};

export default Index;
