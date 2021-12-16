import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
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