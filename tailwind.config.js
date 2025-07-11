const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#f5f5f5",
        light: "#0B0909",
        primary: "#B63E96",
        primaryDark: "#358E6D9",
        customRGB: "rgb(195, 101, 170)"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        aurora: "aurora 60s linear infinite",
        blink: 'blink 2s linear 1',
        'rotate-once': 'rotate-once 1s linear 1',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(255,255,255,0.3) 1px, #000000 10px, #000000 100px)',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        'rotate-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
