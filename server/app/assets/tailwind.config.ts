/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
