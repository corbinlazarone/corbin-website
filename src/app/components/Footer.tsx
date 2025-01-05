"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TwitterLight from "../../../public/twitter-light.svg";
import TwitterDark from "../../../public/twitter-dark.svg";

import { Github, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "../utils/theme-context";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/corbinlazarone",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/corbin-lazarone-58647923b/",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/corbinjlaz",
      icon: (
        <Image
          src={theme === "dark" ? TwitterLight.src : TwitterDark.src}
          alt="Twitter"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/corbinlazarone/",
      icon: <Instagram className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-gray-500 dark:text-gray-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Corbin Lazarone. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
