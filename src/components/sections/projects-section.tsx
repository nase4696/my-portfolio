import { projects } from "@/data/projects";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function ProjectsSection() {
  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-2 md:px-4 max-w-4xl">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <p className="text-lg text-center mb-6 md:mb-8">
            私がこれまでに制作したプロジェクトを紹介します。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 justify-items-center">
          {projects.map((project) => (
            <Card
              className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-900 shadow-md max-w-lg"
              key={project.id}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      className="text-blue-800 dark:text-blue-300"
                      key={tech}
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded text-sm hover:bg-gray-700 transition-colors"
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                      href={project.demoUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>デモを見る</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
