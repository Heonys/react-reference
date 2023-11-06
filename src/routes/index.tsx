import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const fakeDelay = (promise: Promise<any>) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => promise);
};

const RecyclerviewPage = lazy(() => fakeDelay(import("../pages/RecyclerviewPage")));
const Select = lazy(() => fakeDelay(import("../components/Select")));
const LoginFormPage = lazy(() => fakeDelay(import("../pages/LoginFormPage")));
const LazyImagePage = lazy(() => fakeDelay(import("../pages/LazyImagePage")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/recyclerview", element: <RecyclerviewPage /> },
      {
        path: "/select",
        element: <Select label="드롭다운" onChange={() => {}} options={["1", "2"]} />,
      },
      { path: "/loginform", element: <LoginFormPage /> },
      { path: "/lazyimage", element: <LazyImagePage /> },
    ],
  },
]);
export default router;
