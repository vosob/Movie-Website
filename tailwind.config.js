import("tailwindcss").Config;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, // центрує контейнер
      padding: {
        DEFAULT: "48px", // базовий відступ
      },
      screens: {
        xl: "1440px",
      },
    },
    extend: {},
  },
  plugins: [],
};
