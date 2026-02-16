"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[857px] px-6 py-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
