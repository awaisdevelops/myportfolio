"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="03 · Experience"
          title="Where I've built things"
        />

        <div className="relative space-y-10 border-l border-edge pl-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-ink">
                  {exp.role} ·{" "}
                  {exp.live ? (
                    <a
                      href={exp.live.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline"
                    >
                      {exp.org}
                    </a>
                  ) : (
                    <span className="text-accent">{exp.org}</span>
                  )}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{exp.meta}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
