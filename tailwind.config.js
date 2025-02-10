/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue1: "#015180",
        gray2: "#F1EFEF",
        gray3: "#EEEAF1",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 20px 7px #F4F4FA", // Adding custom shadow
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" }, // Start and end at the same position
          "50%": { transform: "translateY(-10px)" }, // Move up slightly
        },
        showUp: {
          '0%': { opacity: 0, transform: 'translateY(1rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
        float: "float 2.5s ease-in-out infinite",
        showUp1: 'showUp 0.5s forwards ease-in-out',
        showUp2: 'showUp 0.7s forwards ease-in-out',
      },
    },
  },
  plugins: [require("daisyui")],
};
