import { Trophy, Users, Code, GitBranch } from "lucide-react";
import { MangaPanel } from "./MangaPanel";

const ITEMS = [
  { icon: Users, title: "Technical Head", sub: "Google Developer Student Club · TCET" },
  { icon: Code, title: "Problem Setter", sub: "Shastra Coding Club · TCET" },
  { icon: Trophy, title: "4× Hackathon Winner", sub: "SIH Finalist (Institute Level)" },
  { icon: GitBranch, title: "Open Source", sub: "GirlScript Summer of Code (GSSoC)" },
];

export const ImpactPanel = () => {
  return (
    <MangaPanel label="Impact" className="md:col-span-5 relative">
      <h2 className="display-font text-3xl md:text-4xl text-ink mb-4">Recognition</h2>
      <div className="grid grid-cols-1 gap-2.5">
        {ITEMS.map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="flex items-start gap-3 border-[2px] border-ink bg-paper p-2.5 shadow-[3px_3px_0_0_hsl(var(--ink))]"
          >
            <div className="bg-ink text-paper-light p-1.5 shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-sm text-ink leading-tight">{title}</p>
              <p className="text-xs text-ink-muted">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </MangaPanel>
  );
};
