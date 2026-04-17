import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { MangaPanel } from "./MangaPanel";
import mangaGreet from "@/assets/manga-greet.png";

export const HeaderPanel = () => {
  return (
    <MangaPanel label="Ch. 01" className="md:col-span-5 md:row-span-2 flex flex-col justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="handwritten text-xs uppercase tracking-[0.3em] text-ink-muted mb-2">
            // Developer Portfolio
          </p>
          <h1 className="display-font text-5xl md:text-7xl leading-[0.9] text-ink">
            SUMIT
            <br />
            SINGH
          </h1>
          <p className="mt-3 text-sm md:text-base text-ink-soft max-w-sm">
            Full-Stack Developer · IT Engineer · Builder of scalable, high-impact things.
          </p>
        </div>
        <img
          src={mangaGreet}
          alt="Manga avatar of Sumit waving"
          className="w-20 h-20 md:w-28 md:h-28 object-contain shrink-0"
          loading="eager"
          width={112}
          height={112}
        />
      </div>

      <div className="flex flex-wrap gap-2 text-xs md:text-sm">
        <a
          href="mailto:sumitharisingh@gmail.com"
          className="inline-flex items-center gap-1.5 border-[2px] border-ink px-2.5 py-1 bg-paper hover:bg-ink hover:text-paper-light transition-colors"
        >
          <Mail className="w-3.5 h-3.5" /> Email
        </a>
        <a
          href="https://linkedin.com/in/sumit-singh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 border-[2px] border-ink px-2.5 py-1 bg-paper hover:bg-ink hover:text-paper-light transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5" /> LinkedIn
        </a>
        <a
          href="https://github.com/sumitsingh24k"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 border-[2px] border-ink px-2.5 py-1 bg-paper hover:bg-ink hover:text-paper-light transition-colors"
        >
          <Github className="w-3.5 h-3.5" /> GitHub
        </a>
        <a
          href="https://leetcode.com/sumit24k"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 border-[2px] border-ink px-2.5 py-1 bg-paper hover:bg-ink hover:text-paper-light transition-colors"
        >
          <Code2 className="w-3.5 h-3.5" /> LeetCode
        </a>
      </div>
    </MangaPanel>
  );
};
