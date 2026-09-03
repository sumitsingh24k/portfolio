import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

/** Both resume variants live in /public — served at the site root. */
export const RESUMES = {
  sde: {
    url: "/Sumit_Singh_SDE.pdf",
    filename: "Sumit_Singh_SDE.pdf",
    label: "SDE Resume",
    aria: "Download Sumit Singh's SDE resume (PDF)",
  },
  ml: {
    url: "/Sumit_Singh_ML.pdf",
    filename: "Sumit_Singh_AI_ML.pdf",
    label: "AI/ML Resume",
    aria: "Download Sumit Singh's AI/ML resume (PDF)",
  },
} as const;

type ResumeTrack = keyof typeof RESUMES;

interface ResumeButtonProps {
  className?: string;
  /** "chip" matches the header link row, "card" matches the contact grid. */
  variant?: "chip" | "card";
  track?: ResumeTrack;
  label?: string;
}

export const ResumeButton = ({
  className,
  variant = "chip",
  track = "sde",
  label,
}: ResumeButtonProps) => {
  const resume = RESUMES[track];
  const isCard = variant === "card";

  return (
    <a
      href={resume.url}
      download={resume.filename}
      aria-label={resume.aria}
      className={cn(
        "group border-[2px] border-ink bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] transition-colors hover:bg-ink hover:text-paper-light",
        isCard
          ? "flex items-center gap-3 px-3 py-2.5 shadow-[3px_3px_0_0_hsl(var(--ink))]"
          : "inline-flex items-center gap-1.5 px-2.5 py-1",
        className,
      )}
    >
      <Download
        className={cn(
          "shrink-0 transition-transform group-hover:translate-y-0.5",
          isCard ? "w-4 h-4" : "w-3.5 h-3.5",
        )}
      />
      <span className={cn(isCard && "text-sm font-medium truncate")}>
        {label ?? resume.label}
      </span>
    </a>
  );
};
