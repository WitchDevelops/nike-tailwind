/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    {
      content: `
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          z-index: 40;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .translate-x-full {
          transform: translateX(100%);
        }
        
        .translate-x-0 {
          transform: translateX(0);
        }
      `,
    },

  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "slate-gray": "#6D6D6D",
        "white-400": "rgba(255, 255, 255, 0.9)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}