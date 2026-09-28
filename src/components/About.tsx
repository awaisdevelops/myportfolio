"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { personalInfo, quickFacts } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="01 · About"
          title="Building products end to end, not just features"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-base leading-relaxed text-muted lg:col-span-3"
          >
            <p>
              I&apos;m a Software Engineering graduate from{" "}
              <span className="font-medium text-ink">
                National Textile University
              </span>{" "}
              who likes taking a product from a blank repo to a live URL with
              real users. That instinct is why I founded{" "}
              <span className="font-medium text-ink">
                CryptocurrencyChain
              </span>{" "}
              and{" "}
              <span className="font-medium text-ink">vSellerStore</span> —
              two production SaaS platforms I designed, built, and operate
              solo, each with its own admin infrastructure and real users.
            </p>
            <p>
              That same instinct is behind{" "}
              <span className="font-medium text-ink">
                SoftWeb Technologies
              </span>
              , the software house I run — taking client projects from a
              first conversation through to a shipped website, mobile app, or
              custom platform. Alongside client work, I&apos;ve shipped a
              multi-tenant School Management SaaS during my internship at
              Safi Dot Tech, and built{" "}
              <span className="font-medium text-ink">HemoHeal</span>, an
              AI-assisted healthcare platform that pairs a LangChain
              natural-language pipeline with an async FastAPI backend for
              donor-recipient matching.
            </p>
            <p>
              I move comfortably across the stack — React/Next.js and Flutter
              on the front end, Node.js/FastAPI and Firebase/MongoDB on the
              back end — and I&apos;m especially drawn to Web3 integrations
              and AI-powered systems that solve a concrete, real-world
              problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card-surface p-6">
              <dl className="space-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-edge pt-5">
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {personalInfo.websiteLabel} ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
