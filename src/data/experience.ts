export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "aws-sde",
    title: "Software Development Engineer",
    company: "AWS",
    period: "2023 - Present",
    description:
      "Architecting serverless solutions using Lambda, DynamoDB, and API Gateway. Optimized data processing pipelines reducing latency by 40%.",
    technologies: ["Java", "TypeScript", "AWS CDK"],
  },
  {
    id: "microsoft-intern",
    title: "SDE Intern",
    company: "Microsoft",
    period: "Summer 2022",
    description:
      "Contributed to the Azure DevOps team. Implemented a new CI/CD feature that improved deployment reliability for 10k+ users.",
    technologies: ["C#", ".NET", "Azure"],
  },
  {
    id: "startup-intern",
    title: "Full Stack Intern",
    company: "StartUp Inc",
    period: "Summer 2021",
    description:
      "Built the initial MVP for a fintech product using React and Node.js. Designed the core database schema.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
];
