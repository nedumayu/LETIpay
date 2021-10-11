import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/main">
                <Main/>
            </Route>
            <Redirect to="/home"/>
        </Switch>
    );
};

export default AppRouter;