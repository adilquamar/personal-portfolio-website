import type { Project } from "./projects";

export const allProjects: Project[] = [
  {
    id: "alexa-feedback-skill",
    title: "SWE Intern — Amazon (Summer 2021)",
    description:
      "Created an internal Alexa Skill (1P) for feedback collection on Alexa's multimodal devices. Leveraged AWS services to host, monitor, and scale a containerized application on ECS/Fargate. Designed and developed RESTful APIs using Java. Streamlined feedback collection and visualization for internal teams.",
    technologies: [
      "Java",
      "AWS",
      "ECS/Fargate",
      "RESTful APIs",
      "Docker",
      "Alexa Skills",
    ],
  },
  {
    id: "alexa-content-freshness",
    title: "SWE Intern — Amazon (Summer 2022)",
    description:
      "Designed and developed a system to guarantee content freshness on Alexa multimodal devices. Implemented cloud-based pub-sub architecture triggered by user-modified settings. Utilized AWS SNS and SQS for efficient message distribution. Tested and deployed containerized application running on ECS/Fargate. Successfully pushed code to production.",
    technologies: ["Java", "AWS SNS", "AWS SQS", "ECS/Fargate", "Docker"],
  },
  {
    id: "livegood-web-admin",
    title: "Web Administrator — Live Good Inc.",
    description:
      "Managed an E-Commerce website serving customers around the nation. Launched a virtual auction to raise over $2,500 for a partner non-profit organization.",
    technologies: ["Web Development", "E-Commerce"],
  },
];
