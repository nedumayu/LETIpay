import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register"
import Profile from "./profile/profile";
import AdminPage from "./admin/AdminPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            {/*<Route exact path="/admin" component={AdminBoard} />*/}
            <Route exact path="/admin" component={AdminPage} />
        </Switch>
    );
};

export default AppRouter;