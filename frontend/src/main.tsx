import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Dashboard from "./routes/Dashboard";
import Create from "./routes/FormBase";
import Login from "./components/LoginFormBase";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
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
    },
    {
        path: "registrar",
        element: <Create />
    },
    {
        path: "login",
        element: <Login />
    }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
