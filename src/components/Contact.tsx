"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { personalInfo } from "@/data/resume";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isFirebaseConfigured || !db) {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `Portfolio message from ${form.name || "a visitor"}`
      )}&body=${encodeURIComponent(form.message)}`;
      return;
    }

    setStatus("sending");
    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="07 · Contact"
          title="Let's build something together"
          description="Have a role, a project, or just want to talk shop about Web3 or AI-integrated products? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-medium text-ink">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="text-sm font-medium text-ink">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            {personalInfo.githubs.map((gh) => (
              <a
                key={gh.username}
                href={gh.url}
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">GitHub</p>
                  <p className="text-sm font-medium text-ink">
                    github.com/{gh.username}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card-surface space-y-4 p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-edge bg-bg/50 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-edge bg-bg/50 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-edge bg-bg/50 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                <CheckCircle2 className="h-4 w-4" />
                Thanks — your message has been sent. I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-500">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
