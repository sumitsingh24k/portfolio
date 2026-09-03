import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

/** Lives in /public — served at the site root. */
export const RESUME_URL = "/Sumit_Singh_SDE.pdf";
export const RESUME_FILENAME = "Sumit_Singh_SDE.pdf";

interface ResumeButtonProps {
  className?: string;
  /** "chip" matches the header link row, "card" matches the contact grid. */
  variant?: "chip" | "card";
  label?: string;
}

export const ResumeButton = ({
  className,
  variant = "chip",
  label = "Resume",
}: ResumeButtonProps) => {
  const isCard = variant === "card";

  return (
    <a
      href={RESUME_URL}
      download={RESUME_FILENAME}
      aria-label="Download Sumit Singh's resume (PDF)"
      className={cn(
        "group border-[2px] border-ink transition-colors",
        isCard
          ? "flex items-center gap-3 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-3 py-2.5 shadow-[3px_3px_0_0_hsl(var(--ink))] hover:bg-ink hover:text-paper-light"
          : "inline-flex items-center gap-1.5 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-2.5 py-1 hover:bg-ink hover:text-paper-light",
        className,
      )}
    >
      <Download
        className={cn(
          "shrink-0 transition-transform group-hover:translate-y-0.5",
          isCard ? "w-4 h-4" : "w-3.5 h-3.5",
        )}
      />
      <span className={cn(isCard && "text-sm font-medium truncate")}>{label}</span>
    </a>
  );
};
