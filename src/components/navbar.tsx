"use client";

import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Info,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const bottomNavLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Info", href: "#contact", icon: Info },
];

export function Navbar() {
  return (
    <>
      {/* Top Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-[857px] items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-foreground"
          >
            Adil Quamar.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] md:hidden">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="rounded-2xl border border-border bg-card/80 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center justify-around px-2 py-2">
            {bottomNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-0.5 px-4 py-0.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <link.icon className="h-[18px] w-[18px]" />
                <span className="text-[10px] font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </>
  );
}
