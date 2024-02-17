import React from "react";
import ReactDOM from "react-dom/client";

import Index from "./pages/home/Index.jsx";
import Login from "./pages/home/Login.jsx";
import Main from "./pages/home/Main.jsx";
import Profile from "./pages/home/Profile.jsx";
import Game from "./pages/game/Game.jsx";

// vou importar aqui o boostrap e Css

import "./assets/css/Style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/main",
        element: <Main />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/main/game",
        element: <Game />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
