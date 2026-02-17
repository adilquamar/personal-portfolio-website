"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { HeroCta, CtaButton } from "./hero/hero-cta";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ctaButtons: CtaButton[] = [
  { label: "View Projects", href: "#projects", variant: "primary", icon: ArrowRight },
  { label: "Contact Me", href: "#contact", variant: "secondary" },
  { label: "Resume", href: "/resume.pdf", variant: "secondary", icon: Download, download: true },
];

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden pb-10 pt-32 lg:pt-40">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-slate-5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-[857px] px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          {/* Status Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center rounded-full border border-slate-20 bg-slate-10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-dark dark:text-slate-light">
              Full-stack Engineer
            </span>
          </motion.div>

          {/* Headings */}
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-[72px] lg:leading-[72px]">
              Hello, I&apos;m{" "}
              <span className="text-text-muted">Adil Quamar.</span>
            </h1>
            <h2 className="text-3xl font-medium text-text-muted sm:text-4xl lg:text-[48px] lg:leading-[48px]">
              SDE at <span className="text-amber">AWS</span>.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-[646px] text-lg leading-relaxed text-text-body sm:text-xl sm:leading-[32.5px]"
          >
            Building and scaling cloud infrastructure at AWS. Specializing in React, TypeScript, and serverless
            architectures with a focus on intuitive developer experiences.
          </motion.p>

          {/* CTA Buttons */}
          <HeroCta buttons={ctaButtons} variants={item} />
        </motion.div>
      </div>
    </section>
  );
}
