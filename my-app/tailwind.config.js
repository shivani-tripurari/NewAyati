/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'fold': '700px',
        'ipad-air': '820px', // Custom breakpoint for 820px width
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/banner_bg.png')",
      },
    },
  },
  plugins: [],
};
