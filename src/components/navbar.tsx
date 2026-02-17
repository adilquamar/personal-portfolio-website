"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, FolderKanban, GraduationCap, Info, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Top Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <nav className="mx-auto flex max-w-[857px] items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#"
            className="font-bold text-xl tracking-tight text-foreground"
          >
            Adil Quamar.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white-5 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="rounded-2xl backdrop-blur-xl bg-white-5 border border-white-10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-around px-2 py-2">
            {bottomNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-0.5 px-4 py-0.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
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
