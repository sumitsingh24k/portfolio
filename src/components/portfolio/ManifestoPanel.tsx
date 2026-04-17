import { motion } from "framer-motion";
import { MangaPanel } from "./MangaPanel";
import mangaKatana from "@/assets/manga-katana.png";

const PRINCIPLES = [
  { kanji: "速", romaji: "SOKU", word: "Speed", desc: "Ship fast. Iterate faster." },
  { kanji: "質", romaji: "SHITSU", word: "Quality", desc: "Clean code. No shortcuts." },
  { kanji: "心", romaji: "KOKORO", word: "Heart", desc: "Build for real users." },
];

export const ManifestoPanel = () => {
  return (
    <MangaPanel
      label="Code"
      variant="dark"
      className="md:col-span-5 relative !bg-ink !text-paper-light overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--paper-light)/0.5) 1.2px, transparent 1.4px)",
          backgroundSize: "7px 7px",
        }}
      />
      <img
        src={mangaKatana}
        alt=""
        aria-hidden
        className="absolute -right-8 -top-4 w-44 opacity-60 rotate-12 pointer-events-none"
        loading="lazy"
        width={1024}
        height={1024}
      />

      <div className="relative">
        <p className="handwritten text-xs uppercase tracking-[0.3em] text-paper-light/60">
          // Dev Manifesto
        </p>
        <h2 className="display-font text-3xl md:text-4xl mt-1 mb-4">Three Codes I Live By</h2>

        <div className="space-y-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.word}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center gap-3 border-l-4 border-accent pl-3 py-1"
            >
              <div className="display-font text-4xl md:text-5xl text-accent leading-none w-12 shrink-0 text-center">
                {p.kanji}
              </div>
              <div>
                <div className="display-font text-lg tracking-widest">
                  {p.romaji} · {p.word}
                </div>
                <div className="text-xs text-paper-light/70">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MangaPanel>
  );
};
