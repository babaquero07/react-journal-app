import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

const router = createBrowserRouter(AppRouter);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
