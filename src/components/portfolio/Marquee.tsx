import { motion } from "framer-motion";

/** Scrolling marquee with manga-style text values. */
export const Marquee = ({
  items,
  reverse = false,
  variant = "dark",
}: {
  items: string[];
  reverse?: boolean;
  variant?: "dark" | "light" | "accent";
}) => {
  const bg =
    variant === "dark"
      ? "bg-ink text-paper-light"
      : variant === "accent"
      ? "bg-accent text-paper-light"
      : "bg-paper-light text-ink";

  const doubled = [...items, ...items];

  return (
    <div className={`${bg} border-y-[3px] border-ink overflow-hidden py-2`}>
      <motion.div
        className="flex gap-10 whitespace-nowrap display-font tracking-widest text-xl md:text-2xl"
        animate={{ x: reverse ? ["−50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span>{item}</span>
            <span className="text-2xl">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
