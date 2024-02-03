import React from "react";

import "@s:pm_app/css/style.css";

import Index from "@s:pm_app/src/pages/home/Index";
import Login from "./pages/home/Login";
import Main from "./pages/home/Main";
import Profile from "./pages/home/Profile";
import Game from "./pages/game/Game";

export default () => {
    return (
        <>
            {<Index />}
            {/* <Login /> */}
            {/*<Main />*/}
            {/* <Profile /> */}
            {/* <Game /> */}
        </>
    );
};
