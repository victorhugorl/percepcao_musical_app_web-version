import React from "react";
import ReactDOM from "react-dom/client";

import Index from "@s:pm_app/src/pages/home/Index";
import Login from "@s:pm_app/src/pages/home/Login";
import Profile from "@s:pm_app/src/pages/home/Profile";
import Main from "@s:pm_app/src/pages/home/Main";
import Game from "@s:pm_app/src/pages/game/Game";

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
        <RouterProvider router={router} />
    </React.StrictMode>
);
