export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "uav-forge",
    title: "UAV Forge — Autonomous Drone System",
    description:
      "Led a team of five engineers to develop modular computer vision software for autonomous drones competing in the AUVSI SUAS Competition. Built object detection, classification, and geolocation systems using ROS and MAVROS protocols.",
    technologies: ["Python", "ROS", "MAVROS", "Computer Vision", "OpenCV"],
    githubUrl: "https://github.com/uci-uav-forge/uavf_2023",
    websiteUrl: "https://uavforge.eng.uci.edu/",
  },
  {
    id: "hackuci",
    title: "Waitless — HackUCI",
    description:
      "Engineered a mobile web app to optimize gym equipment turnover. Awarded Best Social Good Hack and Best Product Pitch out of 500+ participants at HackUCI 2022.",
    technologies: ["Node.js", "Google Firebase", "JavaScript"],
    githubUrl: "https://github.com/limenilbuz/hackuci2022-waitless",
    websiteUrl: "https://devpost.com/software/waitless-cy41hl",
  },
  {
    id: "antz",
    title: "Antz Study Groups",
    description:
      "Created a web application to help students form study groups based on shared classes. Built profile creation, editing, and messaging features — enabled 130+ undergraduate students at UCI.",
    technologies: ["HTML", "CSS", "Node.js", "JavaScript", "Google Firebase"],
    githubUrl: "https://github.com/adilquamar/antz_public/tree/main/public",
  },
];
