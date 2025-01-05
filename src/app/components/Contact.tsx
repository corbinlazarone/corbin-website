"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { ALERT_TYPE } from "../types/alert-types";

export default function Contact({ onAlert }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChanges = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmailSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const templateID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const sendID: string = process.env.NEXT_PUBLIC_SEND_ID;
    const publicKey: string = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    emailjs.init({
      publicKey: publicKey,
    });

    emailjs
      .send(sendID, templateID, {
        from_name: formData.name,
        to_name: "Corbin Lazarone",
        message: formData.message,
        reply_to: formData.email,
      })
      .then(
        (response) => {
          console.log("Response", response);
          onAlert("Email Sent Successfully", ALERT_TYPE.SUCCESS);
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (error) => {
          console.log("ERROR", error);
          onAlert("Error Sending Email. Please try again.", ALERT_TYPE.ERROR);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to write a message! or send email directly to
              corbinlazarone1@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleEmailSend}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChanges}
                required
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg 
                focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent 
                transition-all duration-200 outline-none
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChanges}
                required
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg 
                focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent 
                transition-all duration-200 outline-none
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChanges}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg 
                focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent 
                transition-all duration-200 outline-none resize-none
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button and loading button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-purple-800 dark:bg-purple-700 text-white rounded-lg 
                hover:bg-purple-900 dark:hover:bg-purple-600 
                transition-colors duration-200 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
                focus:ring-offset-2 dark:focus:ring-offset-gray-900
                disabled:opacity-70 disabled:cursor-not-allowed
                flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
