import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fade: "fadeIn .6s ease-in-out",
        fadeOut: "fadeOut 5s ease-in-out",
        delay: "delay .8s ease-in-out",
        rtl: "rtl .6s ease-in-out",
        ltr: "ltr .6s ease-in-out",
        floating: "floating 3s ease-in-out infinite",
        topDown: "topDown 0.4s ease-in-out",
        spinReverse: "spinReverse 1s linear infinite",
      },
      // that is actual animation
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "90%": { opacity: 1, transform: "translateY(0px)" },

          "100%": { opacity: 0, transform: "translateY(16px)" },
        },

        delay: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "50%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        rtl: {
          "0%": { opacity: 0, transform: "translateX(10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        ltr: {
          "0%": { opacity: 0, transform: "translateX(-10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        floating: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" },
        },
        topDown: {
          "0%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
