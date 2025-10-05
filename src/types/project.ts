export type Project = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  status?: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
};
