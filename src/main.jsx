import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { AppTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./router/AppRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  </StrictMode>
);
