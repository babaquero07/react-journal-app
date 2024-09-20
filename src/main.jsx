import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { AppTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { JournalApp } from "./JournalApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </Provider>
  </StrictMode>
);
