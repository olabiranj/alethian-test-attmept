import { extendTheme } from "@chakra-ui/react";
import components from "./components";

const overrides = {
  components,
};

export const theme = extendTheme({
  ...overrides,
  fonts: {
    body: "Lato, serif",
    heading: "Lato, serif",
    mono: "Lato, serif",
  },
  color: {
    primary: {
      50: "#F0F0FD",
      100: "#E1E1FA",
      200: "#C2C2F5",
      300: "#A4A4F0",
      400: "#8585EB",
      500: "#6767E6",
      600: "#4D4DAD",
      700: "#343473",
      800: "#1A1A3A",
      900: "#0A0A17",
    },
  },
});
