import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'btnColor':{
          light: "#ecf1ff",
          DEFAULT: "#666cff",
          dark: "#191650"
        },
        'bgWebsite': '#0A072B',
        'dashboard': {
          primary: '#1C1A3F',
          green: '#2BC24A',
          red: "#FF6E91",
          purple: "#8B3DB4"
        }
      },
      spacing:{
        '18': '72px',
      },
      keyframes: {
        leftEaseIn: {
          '0%': {opacity: "0", transform: 'translateX(-100px)'},
          '100%': {opacity: "1", transform: 'translateX(0px)'},
        },
        rightEaseIn: {
          '0%': {opacity: "0", transform: 'translateX(100px)'},
          '100%': {opacity: "1", transform: 'translateX(0px)'},
        }, 
        staticEaseIn: {
          '0%': {opacity: "0"},
          '100%': {opacity: "1"},
        }
      },
      animation: {
        staticEaseIn : "staticEaseIn 1s ease-in-out forwards",
        rightEaseIn : 'rightEaseIn 1s ease-in-out 0.5s forwards',
        leftEaseIn : 'leftEaseIn 1s ease-in-out 0.5s forwards'
      }
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
