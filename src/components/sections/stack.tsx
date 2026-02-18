"use client";

import { motion } from "framer-motion";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { SectionShell } from "@/components/section-shell";
import { TechTagList } from "@/components/ui/tech-tag";
import { fadeInUpLg } from "@/lib/motion";

interface SkillCategoryGroupProps {
  category: SkillCategory;
  index: number;
}

function SkillCategoryGroup({ category, index }: SkillCategoryGroupProps) {
  return (
    <motion.div
      {...fadeInUpLg}
      transition={{ ...fadeInUpLg.transition, delay: index * 0.1 }}
    >
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {category.name}
      </h3>
      <TechTagList items={category.skills} />
    </motion.div>
  );
}

export function StackSection() {
  return (
    <SectionShell id="stack" title="Stack">
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillCategoryGroup
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </SectionShell>
  );
}
