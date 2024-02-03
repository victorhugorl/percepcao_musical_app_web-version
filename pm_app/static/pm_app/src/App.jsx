import React from "react";

import { Route, BrowserRouter } from "react-router-dom";

import "@s:pm_app/css/style.css";

import Index from "@s:pm_app/src/pages/home/Index";
import Login from "@s:pm_app/src/pages/home/Login";
import Main from "@s:pm_app/src/pages/home/Main";
import Profile from "@s:pm_app/src/pages/home/Profile";
import Game from "@s:pm_app/src/pages/game/Game";

export default () => {
    return (
        <>
            <BrowserRouter>
                <Route component={Index} path="/" exact />
                <Route component={Login} path="/login" />
                <Route component={Main} path="/main" />
                <Route component={Game} path="/game" />
                <Route component={Profile} path="/profile" />
            </BrowserRouter>
        </>
    );
};
