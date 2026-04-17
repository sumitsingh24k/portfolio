import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SFXProps {
  text: string;
  className?: string;
  rotate?: number;
}

/** Big manga sound-effect text overlay. */
export const SFX = ({ text, className, rotate = -8 }: SFXProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={reduce ? false : { scale: 0.4, rotate: rotate - 10, opacity: 0 }}
      whileInView={{ scale: 1, rotate, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
      className={cn(
        "sfx pointer-events-none select-none inline-block text-5xl md:text-7xl",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {text}
    </motion.span>
  );
};
