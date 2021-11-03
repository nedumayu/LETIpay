import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import Profile from "./profile";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    );
};

export default AppRouter;