import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import SWRConfigContext from "./context/SWRContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SWRConfigContext>
      <RouterProvider router={router} />
    </SWRConfigContext>
  </React.StrictMode>
);
