import React from "react";
import ReactDOM from "react-dom/client";

import Index from "@s:pm_app/src/pages/home/Index";
import Login from "@s:pm_app/src/pages/home/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
