/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
      textStroke: {
        blue: "2px blue", // Stroke width and color
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        blue: "2px 2px 4px rgba(0, 0, 255, 0.7)",
      },
      animation: {
        slowPing: "ping 5s linear infinite", // Adjust the duration (2s) as needed
      },
    },
  },
  plugins: [],
};
