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
      // darkNavbar: "#171717",
      // blue: "#1854b4",
      // white: '#ffffff',
      // lightBgColor: "#f2f2fc",
      // lightBlack: "#1e1e1e",
      // bgOffWhite: "#f6f6f6",
      // blueOnHover: "#4a91e24e",


      // light: {
      //   BodyBackground: "#f8f9fa",
      //   NavbarBackground: "#ffffff",
      //   NavbarLinkHover: " #e6e6e6 ",
      //   Primary: "#3498db",
      //   Secondary: "#2c3e50",
      //   Text: "#333333",
      //   Accent: "#e74c3c"
      // },

      // dark: {
      //   BodyBackground: '#1a1a1a',
      //   NavbarBackground: '#282c34',
      //   NavbarLinkHover: '#3a4049',
      //   Primary: '#61dafb',
      //   Secondary: '#282c34',
      //   Text: '#ffffff',
      //   Accent: '#ff6b6b',
      // },


      //Olive Green
      // light: {
      //   BodyBackground: '#f4f4f4',
      //   NavbarBackground: '#ffffff',
      //   NavbarLinkHover: '#e6e6e6',
      //   Primary: '#6B8E23',
      //   Secondary: '#556B2F',
      //   Text: '#333333',
      //   Accent: '#FF8C00',
      //   ActiveLinkBg: '#6B8E23',
      //   ActiveLinkText: '#ffffff',
      // },
      // dark: {
      //   BodyBackground: '#1a1a1a',
      //   NavbarBackground: '#2c2c2c',
      //   NavbarLinkHover: '#3a3a3a',
      //   Primary: '#9ACD32',
      //   Secondary: '#556B2F',
      //   Text: '#f0f0f0',
      //   Accent: '#FFA500',
      //   ActiveLinkBg: '#9ACD32',
      //   ActiveLinkText: '#1a1a1a',
      // },


      // ocean blue color
      light: {
        BodyBackground: '#f6f6f6',    // Used in Main Background color
        NavbarBackground: '#ffffff',  // Used in Navbar Background color
        NavbarLinkHover: '#e6f2ff',
        Primary: '#4682B4',
        Secondary: '#dce9f9',
        Text: '#333333',
        Accent: '#FF8C00',
        // ActiveLinkBg: '#4682B4',
        ActiveLinkText: '#ffffff',
        SpecialColor: "#7eafe8"
      },
      dark: {
        BodyBackground: '#000d18',    // Used in Main Background color
        NavbarBackground: '#031e3d',  // Used in Navbar Background color
        NavbarLinkHover: '##66b9ff3b',
        Primary: '#4682B4',
        Secondary: '#87CEEB',
        Text: '#e0e0e0',
        Accent: '#FFA07A',
        // ActiveLinkBg: '#4682B4',
        ActiveLinkText: '#ffffff',
        SpecialColor: "#7eafe8"
      },

    },
    boxShadow: {
      '3xl': '0px 0px 3px -1px rgba(0, 0, 0, 0.3)',
      '4xl': '0px 0px 5px -1px #9ca3af',
    },

  },
  plugins: [],
}

