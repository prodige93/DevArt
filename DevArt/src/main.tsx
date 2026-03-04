import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
);
