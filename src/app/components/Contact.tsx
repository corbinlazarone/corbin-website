"use client"; 

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to write a message! or send email directly to corbinlazarone1@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Add your form submission logic here
            }}
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
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

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-800 dark:bg-purple-700 text-white rounded-lg 
                hover:bg-purple-900 dark:hover:bg-purple-600 
                transition-colors duration-200 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
                focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
