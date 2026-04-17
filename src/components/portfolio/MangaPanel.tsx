import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MangaPanelProps {
  children: ReactNode;
  className?: string;
  label?: string;
  delay?: number;
  /** Visual variant */
  variant?: "default" | "flat" | "dark";
  hover?: boolean;
}

export const MangaPanel = ({
  children,
  className,
  label,
  delay = 0,
  variant = "default",
  hover = true,
}: MangaPanelProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24, rotate: -0.6 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(
        hover ? "manga-panel" : "manga-panel-flat",
        variant === "dark" && "bg-ink text-paper-light",
        "p-5 md:p-6",
        className,
      )}
    >
      {label && <span className="panel-label">{label}</span>}
      {children}
    </motion.div>
  );
};
