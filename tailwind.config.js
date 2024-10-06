/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      monkspace: ["Space Mono", "sans-serif"],
      jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      Montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      blue: "#4a90e2",
      white: '#ffffff',
      lightBlack: "#1e1e1e",
      bgOffWhite: "#f6f6f6",
      blueOnHover: "#4a91e24e"
    },
    boxShadow: {
      '3xl': '0px 0px 6px -1px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}

