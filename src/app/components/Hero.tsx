"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element: HTMLElement = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m Corbin Lazarone
              </h1>
              <p className="text-xl text-purple-800 dark:text-purple-400">
                Computer Science Student & Software Developer
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Passionate about building impactful software solutions and
              bringing creative ideas to life through code.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-colors"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 border-2 border-purple-800 text-purple-800 rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Image container */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              {/* Main image container with rounded corners */}
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-3xl shadow-xl">
                <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/corbin-profile.png"
                    alt="Corbin Lazarone"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}