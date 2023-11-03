import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RecyclerviewPage from "../pages/RecyclerviewPage";
import Select from "../components/Select";
import LoginForm from "../pages/LoginForm";

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
      { path: "/loginform", element: <LoginForm /> },
    ],
  },
]);
export default router;
