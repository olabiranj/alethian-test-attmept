import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App.jsx";
import { theme } from "./theme";
import { DoctorsProvider } from "./providers/DoctorsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DoctorsProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </DoctorsProvider>
  </StrictMode>
);
