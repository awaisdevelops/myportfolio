"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Blocks,
  Sparkles,
  MessageCircle,
  Send,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { softwareHouse } from "@/data/resume";

const icons = [Code2, Smartphone, ShoppingCart, Blocks, Sparkles];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Software House"
          title={softwareHouse.name}
          description={softwareHouse.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softwareHouse.services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-surface p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between gap-5 rounded-2xl bg-ink p-6 text-bg"
          >
            <div>
              <h3 className="text-lg font-semibold">Have a project in mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-bg/70">
                {softwareHouse.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={softwareHouse.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-bg/30 px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-bg/10"
              >
                <Send className="h-4 w-4" />
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
