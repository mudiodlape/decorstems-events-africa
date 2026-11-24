import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#f5f3f0",
        "inverse-primary": "#abcfb8",
        "surface-tint": "#456553",
        "secondary-fixed": "#ffdea5",
        "primary-fixed": "#c7ebd4",
        "primary-fixed-dim": "#abcfb8",
        "tertiary-fixed": "#cbead6",
        "tertiary": "#0a2418",
        "outline-variant": "#c1c8c2",
        "background": "#FAF8F5",
        "surface": "#FAF8F5",
        "tertiary-fixed-dim": "#b0ceba",
        "primary": "#1B3B2B",
        "outline": "#727973",
        "on-surface": "#1C1C1C",
        "primary-container": "#1b3b2b",
        "on-surface-variant": "#424843",
        "inverse-on-surface": "#f2f0ed",
        "surface-dim": "#dbdad7",
        "on-tertiary-fixed-variant": "#324c3e",
        "on-error": "#ffffff",
        "surface-container-highest": "#e4e2df",
        "on-primary": "#ffffff",
        "error": "#ba1a1a",
        "on-secondary-fixed": "#261900",
        "tertiary-container": "#203a2c",
        "inverse-surface": "#30312f",
        "on-tertiary-container": "#87a492",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#052014",
        "on-secondary-fixed-variant": "#5d4201",
        "secondary": "#C5A059",
        "on-background": "#1C1C1C",
        "surface-container-high": "#eae8e5",
        "on-primary-fixed": "#002113",
        "on-error-container": "#93000a",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#785a1a",
        "on-primary-container": "#83a590",
        "secondary-container": "#fed488",
        "surface-variant": "#e4e2df",
        "on-tertiary": "#ffffff",
        "surface-container": "#efeeeb",
        "surface-bright": "#FAF8F5",
        "on-primary-fixed-variant": "#2d4d3c",
        "secondary-fixed-dim": "#e9c176"
      },
      fontFamily: {
        "serif": ["Playfair Display", "serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      }
    }
  },
  plugins: [forms],
};
