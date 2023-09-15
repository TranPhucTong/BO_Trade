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
        colorSuccess: "rgba(123, 204, 197, 1)",

        textGray: "rgba(117, 116, 116, 1)",
        text_2: "rgba(198, 198, 198, 1)",
        text_4: "rgba(47, 47, 47, 1)",

        redColor: "rgba(255, 49, 65, 1)",
        greenColor: "rgba(0, 142, 118, 1)",

        bgColorBlur: "rgba(117, 116, 116, 0.3)",
        bgHeader: "#191c1c",
        bgBoxDark: "#151818",
        Secondary2: "rgba(175, 192, 255, 1)",
        Secondary3: "rgba(255, 251, 143, 1)",
        Secondary: "rgba(91, 126, 254, 1)",

        bgBlur_2: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "20px",
        },
      },
      screens: {
        "md-up": "768px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;
