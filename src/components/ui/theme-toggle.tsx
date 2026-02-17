"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

// ---------------------------------------------------------------------------
// ThemeToggle — light/dark mode toggle button.
// Extracted from Navbar where it was duplicated for desktop & mobile.
// ---------------------------------------------------------------------------

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-lg p-2 text-muted-foreground transition-colors duration-200 hover:bg-white-5 hover:text-foreground"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
