"use client";

import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[857px] px-6 py-8 lg:px-12">
        <div className="flex items-center justify-center">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
