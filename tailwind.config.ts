import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",

        bgColorBox: "#191c1c",
        bgColorBoxLight: "rgba(254, 255, 255, 1)",
        bgColorIcon: "rgba(47, 47, 47, 1)",
        bgColorIconLight: "#f3fafb",

        colorMenuNavigate: "rgba(117, 116, 116, 0.05)",
        colorBgBoxMemberLight: "rgba(249, 249, 249, 1)",
        colorError: "rgba(255, 160, 159, 1)",

        textGray: "rgba(117, 116, 116, 1)",
        text_2: "rgba(198, 198, 198, 1)",

        redColor: "rgba(255, 49, 65, 1)",
        greenColor: "rgba(0, 142, 118, 1)",

        bgColorBlur: "rgba(117, 116, 116, 0.3)",
        bgHeader: "#191c1c",
      },
      backgroundImage: {
        "box-gradient":
          "linear-gradient(0deg, rgba(117, 116, 116, 0.05), rgba(117, 116, 116, 0.05)),linear-gradient(105.86deg, rgba(123, 204, 197, 0.5) 0%, rgba(123, 204, 197, 0) 54.77%, rgba(123, 204, 197, 0.5) 100%);",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
