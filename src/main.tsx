import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { ContextProvider } from "./Components/Context/ContextProvider";
import "./index.css";
import { Spinnie } from "./Components/Spinnie";
import { useState } from "react";

export const OnLoad = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Spinnie />}
      <App setLoading={setLoading} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <OnLoad />
    </ContextProvider>
  </React.StrictMode>
);
