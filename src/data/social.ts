export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:hello@alexchen.dev",
    icon: "mail",
  },
];
