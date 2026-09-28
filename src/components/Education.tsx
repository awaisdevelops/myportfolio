"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education, languages } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-container grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="06 · Education" title="Academic background" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card-surface -mt-4 flex gap-4 p-6"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-ink">
                  {education.degree}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {education.period}
                </span>
              </div>
              <p className="text-sm font-medium text-accent">
                {education.school}
              </p>
              <p className="mt-0.5 text-sm text-muted">
                {education.meta} · {education.gpa}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {education.details}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Capstone:</span>{" "}
                {education.capstone}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="self-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface p-6"
          >
            <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-accent">
              <LanguagesIcon className="h-4 w-4" />
              Languages
            </h3>
            <div className="mt-4 space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between text-sm">
                  <span className="font-medium text-ink">{lang.name}</span>
                  <span className="text-right text-muted">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
