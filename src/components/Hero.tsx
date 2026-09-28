"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, MapPin, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/resume";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-1.5 text-sm font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to client projects, internships &amp; new-grad roles
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-ink sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium text-ink sm:text-2xl"
          >
            {personalInfo.role}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-2 font-mono text-sm text-accent sm:text-base"
          >
            {personalInfo.focus}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-ink/10 transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              Hire SoftWeb Technologies
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </span>
            {personalInfo.githubs.map((gh) => (
              <a
                key={gh.username}
                href={gh.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4" />
                github.com/{gh.username}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-muted sm:flex"
        aria-label="Scroll to About section"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
