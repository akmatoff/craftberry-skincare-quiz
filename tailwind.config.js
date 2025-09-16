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
        "primary-darker": "var(--primary-darker)",
        border: "var(--border-color)",
        "muted-content": "var(--muted-content)",
        content: "var(--content)",
        inactive: "var(--inactive)",
      },
    },
  },
  plugins: [],
};
