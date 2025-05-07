export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      custom: ["Nunito Sans", "sans-serif"],
    },
    animation: {
      "dropDown": "load 2s ease-in-out",
    },
    keyframes: {
      load: {
        "0%": {
          width: "0%",
        },
        "50%": {
          width: "50%",
        },
        "100%": {
          width: "100%",
        },
      },
    },
  },
};
export const plugins = [];
