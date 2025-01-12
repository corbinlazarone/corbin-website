/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'glow-flow': {
          '0%': {
            transform: 'translateY(0) scaleY(1)',
            opacity: 0.4,
          },
          '50%': {
            transform: 'translateY(-30vh) scaleY(1.5)',
            opacity: 0.6,
          },
          '100%': {
            transform: 'translateY(-60vh) scaleY(1)',
            opacity: 0.4,
          }
        },
        'float-particle': {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: 0,
          },
          '50%': {
            transform: 'translate(10px, -20px) scale(1.5)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translate(0, -40px) scale(1)',
            opacity: 0,
          }
        }
      },
      animation: {
        'glow-flow': 'glow-flow 10s infinite ease-in-out',
        'float-particle': 'float-particle 8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}