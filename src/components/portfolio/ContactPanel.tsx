import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { MangaPanel } from "./MangaPanel";

const LINKS = [
  { icon: Mail, label: "sumitharisingh@gmail.com", href: "mailto:sumitharisingh@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/sumit-singh-964871260", href: "https://www.linkedin.com/in/sumit-singh-964871260/" },
  { icon: Github, label: "github.com/sumitsingh24k", href: "https://github.com/sumitsingh24k" },
  { icon: Code2, label: "leetcode.com/sumit24k", href: "https://leetcode.com/sumit24k" },
];

export const ContactPanel = () => {
  return (
    <MangaPanel label="Contact" className="md:col-span-12">
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-center">
        <div>
          <h2 className="display-font text-4xl md:text-5xl text-ink leading-none">
            Let's
            <br />
            Build!
          </h2>
          <p className="handwritten text-sm text-ink-muted mt-3">
            // Open to roles, collabs & coffee chats.
          </p>
          <p className="text-sm text-ink-soft mt-1">+91 85916 18604</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-3 border-[2px] border-ink bg-paper-light px-3 py-2.5 shadow-[3px_3px_0_0_hsl(var(--ink))] hover:bg-ink hover:text-paper-light transition-colors"
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium truncate">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </MangaPanel>
  );
};
