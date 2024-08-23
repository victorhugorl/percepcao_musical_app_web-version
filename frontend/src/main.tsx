import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Dashboard from "./routes/Dashboard";

import "./assets/css/Index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "painel",
        element: <Dashboard />
    }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
