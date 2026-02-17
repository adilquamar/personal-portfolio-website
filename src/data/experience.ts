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
    company: "Amazon Web Services (AWS)",
    period: "Jan 2024 – Present",
    description:
      "Engineer the Management Console for AWS API Gateway, a Tier 1 service. Led cross-console launches including MCP proxy integration with Amazon Bedrock AgentCore, dynamic routing rules (14M invocations in week one), and VPC Lattice custom domain names. Built error detection systems to improve system monitoring and reduce downtime.",
    technologies: ["React", "TypeScript", "AWS CDK", "API Gateway", "CloudScape"],
  },
  {
    id: "uav-forge",
    title: "Computer Vision Team Lead",
    company: "UAV Forge",
    period: "Sep 2022 – Jun 2023",
    description:
      "Led a team of five engineers to develop modular software for drone object detection and geolocation using ROS and MAVROS protocols, resulting in successful payload delivery from 75ft+.",
    technologies: ["Python", "ROS", "MAVROS", "Computer Vision"],
  },
  {
    id: "amazon-intern",
    title: "SDE Intern",
    company: "Amazon (Lab 126)",
    period: "Jun 2021 – Sep 2022",
    description:
      "Designed a cloud-based content freshness system using AWS SNS, SQS, and ECS/Fargate, automating real-time UI updates for Alexa multimodal devices. Developed RESTful APIs in Java to power internal feedback collection, streamlining data visualization for product teams.",
    technologies: ["Java", "AWS SNS", "AWS SQS", "ECS/Fargate", "Docker"],
  },
];
