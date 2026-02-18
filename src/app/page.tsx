import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { AllProjectsSection } from "@/components/sections/all-projects";
import { StackSection } from "@/components/sections/stack";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AllProjectsSection />
      <StackSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
