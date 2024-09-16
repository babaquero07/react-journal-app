import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

const router = createBrowserRouter(AppRouter);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  </StrictMode>
);
