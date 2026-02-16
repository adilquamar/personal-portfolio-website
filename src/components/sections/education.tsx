"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education, coursework } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-[857px] px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex items-center gap-3"
        >
          <div className="h-[2px] w-8 bg-cyan" />
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Education
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {/* University Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white-5 bg-card p-8"
          >
            <div className="mb-6 inline-flex rounded-xl border border-white-5 bg-white-5 p-3">
              <GraduationCap className="h-6 w-6 text-cyan" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {education.institution}
            </h3>
            <p className="mt-2 text-base text-text-body">
              {education.degree}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded border border-white-5 bg-white-5 px-2.5 py-1 text-sm font-medium text-text-tag">
                {education.gpa}
              </span>
              <span className="rounded border border-white-5 bg-white-5 px-2.5 py-1 text-sm font-medium text-text-muted">
                {education.period}
              </span>
            </div>
          </motion.div>

          {/* Coursework Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white-5 bg-card p-8"
          >
            <div className="mb-6 inline-flex rounded-xl border border-white-5 bg-white-5 p-3">
              <BookOpen className="h-6 w-6 text-cyan" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Notable Coursework
            </h3>
            <ul className="mt-4 space-y-3">
              {coursework.map((course) => (
                <li
                  key={course.id}
                  className="flex items-center gap-3 text-sm text-text-body"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  {course.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
