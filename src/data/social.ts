export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/adilquamar",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/aquamar",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:aquamar@uci.edu",
    icon: "mail",
  },
];
