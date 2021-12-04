import React, {useEffect, useState} from 'react';
import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home";
import Login from "../auth/Login";
import Register from "../auth/Register"
import Profile from "../profile/profile";
import AdminPage from "../admin/AdminPage";
import AccountantPage from "../accountant/AccountantPage"
import Payment from "../pay/payment"
import Transfer from "../pay/transfer"
import HistoryContainer from "../history/HistoryContainer";
import ExamplePay from "../accountant/ExamplePay"
import StorageService from "../../services/StorageService";

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [roles, setRoles] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect( () => {
        setIsAuth(StorageService.isExist())
        if (isAuth) {
            UserService.getRoles()
                .then(roles => {
                    setRoles(roles.data?.roles.map(res => res.name));
                }).finally(() => setIsLoad(true));
        }

    }, [isAuth])


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