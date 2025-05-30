import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "The current website you are on!",
      technologies: ["Next.js", "Tailwind"],
      github: "https://github.com/corbinlazarone/corbin-website",
      demo: "https://corbinlazarone.com",
    },
    {
      title: "Todue",
      description: "Syllabus to Calendar Automation Tool for students.",
      technologies: ["Next.js", "Tailwind", "Express", "Supabase"],
      github: "https://github.com/corbinlazarone/Todue",
      demo: "https://trytodue.com",
    },
    {
      title: "Watchwise",
      description: "View your most liked YouTube channels and videos.",
      technologies: ["Next.js", "Tailwind", "Express", "Supabase"],
      github: "https://github.com/corbinlazarone/watchwise-public",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
                    >
                      GitHub →
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
                    >
                      Live Demo →
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}