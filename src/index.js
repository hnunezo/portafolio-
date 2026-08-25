import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import { LanguageProvider } from "./i18n/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
