module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rule: ['"Bebas Neue"', "cursive"],
        content: ['"Josefin Slab"', "serif"],
        title: ["Cinzel", "serif"],
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1024px",
        "2xl": "1440px",
      },
      colors: {
        primary: "#76BB9F",
        secondary: "#E74757",
        tertiary: "#DC8F66",
        lightWhite: "#FEFEFE",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
