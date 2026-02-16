"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-[857px] px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          {/* Status Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center rounded-full border border-cyan-20 bg-cyan-10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              Available for hire
            </span>
          </motion.div>

          {/* Headings */}
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-[72px] lg:leading-[72px]">
              Hello, I&apos;m{" "}
              <span className="text-text-muted">John Doe.</span>
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
            Building scalable distributed systems and minimal,
            high-performance user interfaces. Obsessed with code quality and
            pixel-perfect design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background transition-all duration-200 hover:opacity-90 hover:gap-3"
            >
              View Projects
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white-20 px-6 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-white-5"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
