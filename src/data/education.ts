export interface Education {
  id: string;
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  honors: string[];
}

export interface Coursework {
  id: string;
  name: string;
}

export const education: Education = {
  id: "uci",
  institution: "University of California, Irvine",
  degree: "B.S. in Computer Science and Engineering",
  gpa: "GPA: 3.88/4.0",
  period: "2019 – 2023",
  honors: ["Magna Cum Laude", "Dean's Honor List (All Quarters)"],
};

export const coursework: Coursework[] = [
  { id: "distributed", name: "Distributed Systems" },
  { id: "algorithms", name: "Advanced Algorithms" },
  { id: "ml", name: "Machine Learning" },
  { id: "os", name: "Operating Systems" },
  { id: "db", name: "Database Internals" },
];
