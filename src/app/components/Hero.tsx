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
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">

      {/* Glowing flowing lines */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <div
              className={`
                h-[200px] w-[2px]
                bg-gradient-to-t from-transparent via-purple-500 to-transparent
                animate-glow-flow
                blur-[2px]
                relative
              `}
              style={{
                animationDelay: `${i * -2}s`,
                opacity: 0.4,
              }}
            >
              <div className="absolute inset-0 bg-purple-400 blur-xl opacity-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Subtle particle effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.3,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
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
                className="px-8 py-3 border-2 border-purple-800 text-purple-800 dark:text-white dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors"
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
