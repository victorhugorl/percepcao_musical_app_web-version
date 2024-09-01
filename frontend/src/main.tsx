import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Dashboard from "./routes/Dashboard";
import Create from "./routes/FormBase";

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
        path: "cadastrar",
        element: (
            <Create
                title="Cadastrar usuario"
                form_control="/"
                nameBtn="Criar"
                loginYu={false}
            />
        )
    },
    {
        path: "login",
        element: (
            <Create
                title="Login"
                form_control="/"
                nameBtn="Entrar"
                loginYu={true}
            />
        )
    }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
