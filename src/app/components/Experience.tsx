import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Company 1",
      period: "Summer 2023",
      description: "Description of your responsibilities and achievements",
    },
    {
      title: "Software Development Intern",
      company: "Company 2",
      period: "Summer 2022",
      description: "Description of your responsibilities and achievements",
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
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-purple-800 dark:text-purple-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
