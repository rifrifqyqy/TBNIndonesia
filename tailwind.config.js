/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CAD32C",
        darkp: "#B6BE28",
        gray1: "#010101",
        gray3: "#737373",
        gray4: "#B3B3B3",
        gray5: "#E6E6E6",
        brown1: "#B76300",
        // Tambahkan warna tambahan sesuai kebutuhan Anda
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        statliches: ["Staatliches", "sans-serif"],
      },
      boxShadow: {
        shadow1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
