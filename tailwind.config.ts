import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginPageRightImage': "url('../public/assets/images/login-background-image.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderColor: "#808080",
        buttonBG: "#1F5AF4",
        loginPageRightBG:"#005DCC",
        patientBG: "#f9f9f9",
        lightGreen: "#cbeede",
        greenColor: "#01A85A",
        outlineBlue: "#276DF7",
        lightBlue: "#cce1f9",
        lightRed: "#fcd6d2",
        lightOrange: "#ffe4cc",
        orangeColor: "#FF7A00",
        redColor: "#F42C1F",
        lightBlueBG: "#e9f0fe",
        infoBG: "#EFEFEF"
      },
    },
  },
  plugins: [],
} satisfies Config;
