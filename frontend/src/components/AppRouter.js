import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register"
import Profile from "./profile/profile";
import AdminPage from "./admin/AdminPage";
import AccountantPage from "./accountant/AccountantPage"
import Payment from "./pay/payment"
import Transfer from "./pay/transfer"
import HistoryContainer from "./history/HistoryContainer";
import ExamplePay from "./accountant/ExamplePay"

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/account" component={AccountantPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/transfer" component={Transfer} />
            <Route exact path="/history" component={HistoryContainer} />
            <Redirect to="/home"/>
        </Switch>
    );
};

export default AppRouter;