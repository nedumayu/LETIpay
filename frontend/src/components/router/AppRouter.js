import React, {useEffect, useState} from 'react';
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
import StorageService from "../../services/StorageService";
import UserService from "../../services/UserService";
import {authRoutes, publicRoutes} from "./routes";

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
            {isAuth && isLoad && authRoutes.map(({path, Component, reqRole}) =>
                <Route key={path} path={path} component={Component}/>
            )}
            {!isAuth && publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component}/>)
            }
        </Switch>
    );
};

export default AppRouter;