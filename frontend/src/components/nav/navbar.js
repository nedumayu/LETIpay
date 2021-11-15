import React, {Component} from 'react';
import {Link} from "react-router-dom";
import StorageService from "../../services/StorageService";
import AuthService from "../../services/AuthService";
import "./navbar.css"
import Logo from "../../assets/logo.png"

export default class Navbar extends Component {
    state = {
        currentUser: null,
        showAdmin: false
    }

    componentDidMount() {
        const user = StorageService.getUser();
        if (user) {
            this.setState({
                currentUser: user,
                showAdmin: user?.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showAdmin: false,
            currentUser: undefined,
        });
    }

    render() {
        const {currentUser, showAdmin} = this.state;
        return (
            <div>
                <nav className="navigation">
                    <Link to={"/"}>
                        <img className="logo" src={Logo} alt="Logo picture"/>
                    </Link>
                    <div className="navigation-nav">
                    {currentUser && (
                            <li className="nav-item">
                                <Link to={"/profile"} className="navigation-link">
                                    Профиль
                                </Link>
                            </li>
                    )}
                    {showAdmin && (
                            <li className="nav-item">
                                <Link to={{
                                    pathname: "/admin",
                                    state: {
                                        username: currentUser.username
                                    }
                                }} className="navigation-link">
                                    Таблица
                                </Link>
                            </li>
                    )}
                    {currentUser ? (
                            <li className="nav-item">
                                <a href="/login" className="navigation-link" onClick={this.logOut}>
                                    Выход
                                </a>
                            </li>
                    ) : (
                        <div className="log-in-row">
                            <li className="nav-item">
                                <Link to={"/login"} className="navigation-link">
                                    Вход
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/register"} className="navigation-link">
                                    Регистрация
                                </Link>
                            </li>
                        </div>
                    )}
                    </div>
                </nav>
                <hr/>
            </div>
        );
    }
}
