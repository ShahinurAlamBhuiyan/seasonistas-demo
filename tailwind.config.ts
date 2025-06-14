// import type { Config } from "tailwindcss";

// const config: Config = {
// content: [
//   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   "./app/**/*.{js,ts,jsx,tsx,mdx}",
// ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
let config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
      body: ["Urbanist", "sans-serif"],
    },
    extend: {
      colors: {
        teal: "#559092",
        "teal-dark": "#447475",
        "gray-line": "#E7E7E7",
        "gray-line-2": "#BAB7B7",
        "gray-line-3": "#828193",
        "gray-prose": "#6E6E6E",
        "x-purple": "#441D5C",
        // 'x-ctrl-purple': '#922fcf'
        "x-ctrl-purple": "#441D5C",
      },
      backgroundImage: {
        "login-radial":
          "radial-gradient(circle, rgba(11,43,54,1) 0%, rgba(15,77,65,1) 0%, rgba(11,43,54,1) 100%)",
      },
    },
    screens: {
      ph: "520px",
      sm: "640px",
      md: "768px",
      wl: "896px",
      lg: "1024px",
      ll: "1152px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      us: ["0.625rem", { lineHeight: "normal" }],
      xs: ["0.75rem", { lineHeight: "normal" }],
      esm: ["0.83rem", { lineHeight: "normal" }] /* esm = Even SMaller */,
      sm: ["0.875rem", { lineHeight: "normal" }],
      fine: ["0.9375rem", { lineHeight: "normal" }],
      base: ["1rem", { lineHeight: "normal" }],
      md: ["1.075rem", { lineHeight: "normal" }],
      lg: ["1.125rem", { lineHeight: "normal" }],
      xl: ["1.25rem", { lineHeight: "normal" }],
      "2xl": ["1.5rem", { lineHeight: "normal" }],
      "2.5xl": ["1.68rem", { lineHeight: "normal" }],
      "3xl": ["1.875rem", { lineHeight: "normal" }],
      "4xl": ["2.25rem", { lineHeight: "normal" }],
      "4.5xl": ["2.5rem", { lineHeight: "normal" }],
      "5xl": ["3rem", { lineHeight: "normal" }],
      "6xl": ["3.75rem", { lineHeight: "normal" }],
      "7xl": ["4.5rem", { lineHeight: "normal" }],
      "8xl": ["6rem", { lineHeight: "normal" }],
      "9xl": ["8rem", { lineHeight: "normal" }],
    },
  },
  plugins: [],
};

// @ts-ignore
let mtConfig: import("tailwindcss").Config = withMT(config);

// Material Tailwind seems to overwrite config.theme.screens. See here:
// https://github.com/creativetimofficial/material-tailwind/blob/a318436ecab2abfe6986c9e32b4fed8007b78014/packages/material-tailwind-react/src/utils/withMT.js
//
// We re-overwrite this back to our requirements. Also, since our screens object is just a superset of what material tailwind expects, everything should be fine.

/** @type {import('tailwindcss').Config} */
export default {
  ...mtConfig,
  theme: {
    ...(mtConfig.theme || {}),
    screens: config.theme?.screens,
  },
};
