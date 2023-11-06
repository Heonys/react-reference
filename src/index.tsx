import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import SWRConfigContext from "./context/SWRContext";
import LoadingSpinner from "./components/LoadingSpinner";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Suspense fallback={<LoadingSpinner />}>
    <React.StrictMode>
      <SWRConfigContext>
        <RouterProvider router={router} />
      </SWRConfigContext>
    </React.StrictMode>
  </Suspense>
);
