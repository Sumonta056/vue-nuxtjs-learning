/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#6B7280",
        tertiary: "#9CA3AF",
        quaternary: "#D1D5DB",
        quinary: "#E5E7EB",
        senary: "#F3F4F6",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        
        center: true,
        padding: "1rem",
      },  
    },
  },
  plugins: [],
};

