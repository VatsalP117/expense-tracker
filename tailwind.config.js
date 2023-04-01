const { fontFamily } = require("tailwindcss/defaultTheme");
const { join } = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,jsx,ts,tsx}",
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};

// "./app/**/*.{js,ts,jsx,tsx}",
// "./pages/**/*.{js,ts,jsx,tsx}",
// "./components/**/*.{js,ts,jsx,tsx}",
