import { Github, Mail } from "lucide-react";
import { personalInfo } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js
          &amp; Firebase.
        </p>
        <div className="flex items-center gap-4">
          {personalInfo.githubs.map((gh) => (
            <a
              key={gh.username}
              href={gh.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
              aria-label={`GitHub: ${gh.username}`}
            >
              <Github className="h-4 w-4" />
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition-colors hover:text-ink"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
