export interface Education {
  id: string;
  institution: string;
  degree: string;
  gpa: string;
  period: string;
}

export interface Coursework {
  id: string;
  name: string;
}

export const education: Education = {
  id: "uw",
  institution: "University of California, Irvine",
  degree: "B.S. in Computer Science",
  gpa: "GPA: 3.9/4.0",
  period: "2019 - 2023",
};

export const coursework: Coursework[] = [
  { id: "distributed", name: "Distributed Systems" },
  { id: "algorithms", name: "Advanced Algorithms" },
  { id: "ml", name: "Machine Learning" },
  { id: "os", name: "Operating Systems" },
  { id: "db", name: "Database Internals" },
];
