/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        "muted-foreground": "var(--muted-foreground)",
        primary: "var(--primary-color)",
        "muted-content": "var(--muted-content)",
        content: "var(--content)",
      },
    },
  },
  plugins: [],
};
