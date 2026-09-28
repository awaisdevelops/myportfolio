"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Technologies I work with"
          description="A practical toolkit built through a live SaaS product, an internship, and a string of self-directed projects."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-surface p-6"
            >
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-edge bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                  >
                    {skill}
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
