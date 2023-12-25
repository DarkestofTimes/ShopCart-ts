import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { ContextProvider } from "./Components/Context/ContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
