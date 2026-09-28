"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/data/resume";

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="05 · Achievements" title="Highlights" />

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-surface flex gap-4 p-6"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
