import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "BBP",
      period: "Dec 2022 - May 2024",
      website: "https://bbpsales.com/",
      description: "Worked with other developers to build systems for tracking sensor data and revamped an existing business management software, both using Ignition. The update made everything run faster when loading orders and production info, and made it easier for people to use and get their work done.",
    },
    {
      title: "Software Engineering Intern",
      company: "Chevron",
      period: "May 2024 - Aug 2024",
      website: "https://www.chevron.com/",
      description: "Collaborated with a team of developers to build and deploy .NET 8 APIs, adding a security layer for business users and in-house Azure function apps.",
    },
    {
      title: "Full Stack Development Intern",
      company: "BBP",
      period: "Aug 2024 - Present",
      website: "https://bbpsales.com/",
      description: "N/A",
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 md:py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Link
              key={index}
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer"
            >
              <div
                className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm 
                  rounded-2xl p-6 md:p-8 
                  shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                  border border-gray-100/50 dark:border-gray-700/50
                  transition-all duration-300 ease-out
                  hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 text-purple-800 dark:text-purple-400 
                        font-medium group-hover:text-purple-900 dark:group-hover:text-purple-300 
                        transition-colors">
                        {exp.company}
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <div
                      className="hidden md:block w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 
                      group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Gradient Overlay on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/[0.02] to-blue-500/[0.02] 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
