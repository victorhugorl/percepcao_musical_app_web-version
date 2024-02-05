import React from "react";
import ReactDOM from "react-dom/client";

import Index from "@s:pm_app/src/pages/home/Index";
import Login from "@s:pm_app/src/pages/home/Login";
<<<<<<< HEAD
import Main from "@s:pm_app/src/pages/home/Main";
import Game from "@s:pm_app/src/pages/game/Game";

=======
import Profile from "@s:pm_app/src/pages/home/Profile";
import Main from "@s:pm_app/src/pages/home/Main";
import Game from "@s:pm_app/src/pages/game/Game";
>>>>>>> a176e02e8c28a68abe905adb52de3e211fa7d023

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
<<<<<<< HEAD
        path: "/main/game",
        element: <Game />
    },
=======
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/main/game",
        element: <Game />
    }
>>>>>>> a176e02e8c28a68abe905adb52de3e211fa7d023
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
