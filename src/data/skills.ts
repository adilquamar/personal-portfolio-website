export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C++", "SQL", "HTML/CSS"],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Redux", "Google Firebase"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: [
      "AWS API Gateway",
      "Amazon Bedrock",
      "AWS CDK",
      "VPC Lattice",
      "SNS/SQS",
      "ECS/Fargate",
      "CI/CD",
      "IaC",
    ],
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["Git", "Docker", "ROS", "MAVROS", "Unix/Linux", "CloudWatch", "CloudScape"],
  },
];
