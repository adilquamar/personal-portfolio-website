"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionShell } from "@/components/section-shell";
import { socialLinks } from "@/data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[48px] lg:leading-[48px]">
            CTA Header
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-body sm:text-lg">
            Contact description.
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border border-white-10 p-2.5 text-muted-foreground transition-colors hover:border-white-20 hover:text-foreground"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl border border-white-5 bg-card p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </SectionShell>
  );
}
