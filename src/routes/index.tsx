import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RecyclerviewPage from "../pages/RecyclerviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/recyclerview", element: <RecyclerviewPage /> }],
  },
]);
export default router;
