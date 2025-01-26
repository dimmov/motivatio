import ReactDOM from "react-dom/client";
import "./global-imports.tsx";
import AppRoutes from "../routes/index.tsx";
import React from "react";

export function bootstrap() {
  const root = ReactDOM.createRoot(document.getElementById("root")!);

  root.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
}
