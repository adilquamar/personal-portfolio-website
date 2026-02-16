export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "cloudscale",
    title: "CloudScale",
    description:
      "A serverless infrastructure automation tool that simplifies AWS deployment with one-click provisioning and monitoring.",
    technologies: ["Go", "Terraform", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/projects/cloudscale.jpg",
  },
  {
    id: "algovis",
    title: "AlgoVis",
    description:
      "Interactive visualization of complex sorting and graph algorithms with step-by-step animation controls and complexity analysis.",
    technologies: ["React", "D3.js", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/projects/algovis.jpg",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description:
      "Real-time collaborative project management dashboard with Kanban boards, time tracking, and team analytics.",
    technologies: ["Next.js", "Supabase", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/projects/taskflow.jpg",
  },
  {
    id: "neuronet",
    title: "NeuroNet",
    description:
      "Neural network implementation from scratch in C++ with CUDA acceleration for training on custom datasets.",
    technologies: ["C++", "CUDA", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/projects/neuronet.jpg",
  },
];
