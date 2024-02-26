/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main": ['Jost'],
        "heading": ['DM Serif Display'],
      }
    },
    colors: {
      "darkBlue": '#292F36',
      "darkGrey": '#4D5053',
      'lightBrown': '#CDA274',
    }
  },
  plugins: [],
};
