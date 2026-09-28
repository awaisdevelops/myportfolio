"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/resume";
import clsx from "clsx";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Selected work"
          description="From a live production SaaS to AI-assisted healthcare tooling — projects I designed and shipped end to end."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={clsx(
                "group card-surface relative flex flex-col justify-between overflow-hidden p-6 transition-transform hover:-translate-y-1 hover:border-accent/40",
                project.featured && "sm:col-span-2"
              )}
            >
              {project.featured && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Star className="h-3 w-3 fill-accent" />
                  Flagship Project
                </span>
              )}

              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap font-mono text-xs text-muted">
                    {project.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 border-t border-edge pt-4">
                {project.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    {link.icon === "github" ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
