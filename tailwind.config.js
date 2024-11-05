import { luiPlugin } from "@lui-ui/lui-tailwindcss";
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [luiPlugin(), require("@tailwindcss/typography")],
};
