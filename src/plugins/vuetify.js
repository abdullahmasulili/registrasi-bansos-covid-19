/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "jabarColorSystem",
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
      jabarColorSystem: {
        dark: false,
        colors: {
          primary: "#069550",
          active: "#20A95A",
          focus: "#FED32C",
          error: "#D32F2F",
          warning: "#FFA600",
          yellow: "#FFD026",
          green: "#16A75C",
          blue: "#1E88E5",
          pink: "#FF4D77",
          red: "#F44336",
          purple: "#AB47BC",
          gray: "#212121",
          black: "#111313",
          "primary-blue": "#1E88E5",
          "primary-yellow": "#FFD026",
          "primary-green": "#16A75C",
          "yellow-50": "#FFF9E1",
          "yellow-100": "#FFEEB4",
          "yellow-200": "#FFE483",
          "yellow-300": "#FFDA4F",
          "yellow-400": "#FFD026",
          "yellow-500": "#FFC800",
          "yellow-600": "#FFB900",
          "yellow-700": "#FFA600",
          "yellow-800": "#FF9500",
          "yellow-900": "#FF7500",
          "green-50": "#E6F6EC",
          "green-100": "#C3E9D0",
          "green-200": "#9BDBB3",
          "green-300": "#70CD94",
          "green-400": "#4DC27E",
          "green-500": "#1FB767",
          "green-600": "#16A75C",
          "green-700": "#069550",
          "green-800": "#008444",
          "green-900": "#006430",
          "red-50": "#FFEBEE",
          "red-100": "#FFCDD2",
          "red-200": "#EF9A9A",
          "red-300": "#E57373",
          "red-400": "#EF5350",
          "red-500": "#F44336",
          "red-600": "#E53935",
          "red-700": "#D32F2F",
          "red-800": "#C62828",
          "red-900": "#B71B1C",
          "blue-50": "#E3F2FD",
          "blue-100": "#BBDEFB",
          "blue-200": "#90CAF9",
          "blue-300": "#64B5F6",
          "blue-400": "#42A5F5",
          "blue-500": "#2196F3",
          "blue-600": "#1E88E5",
          "blue-700": "#1976D2",
          "blue-800": "#1565C0",
          "blue-900": "#0D47A1",
        },
      },
    },
  },
});
