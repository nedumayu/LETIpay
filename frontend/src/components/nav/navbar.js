import React, {Component} from 'react';
import {Link} from "react-router-dom";
import StorageService from "../../services/StorageService";
import AuthService from "../../services/AuthService";
import "./navbar.css"
import Logo from "../../assets/logo2.png"

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
                showLeti: user?.roles.includes("ROLE_LETI"),
                showUser: user?.roles.includes("ROLE_USER")
            });
        }
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showAdmin: false,
            showLeti: false,
            showUser: false,
            currentUser: undefined,
        });
    }

    render() {
        const {currentUser, showAdmin, showLeti, showUser} = this.state;
        return (
            <div>
                <nav className="navigation">

                    <Link to={"/"} className="logo-container">
                        <img className="logo" src={Logo} alt="logo"/>
                        <p className="logo-title">Единый портал для студентов СПБГЭТУ</p>
                    </Link>

                    <div className="navigation-nav">
                        {currentUser && (
                            <div className="log-in-row">
                                <li className="nav-item">
                                    <Link to={"/profile"} className="navigation-link">
                                        Профиль
                                    </Link>
                                </li>

                            </div>
                        )}
                        {showUser && <div>
                            <div className="log-in-row">
                                <li className="nav-item">
                                    <Link to={"/payment"} className="navigation-link">
                                        Оплатить
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/transfer"} className="navigation-link">
                                        Перевести
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/history"} className="navigation-link">
                                        История операций
                                    </Link>
                                </li>
                            </div>
                        </div>
                        }

                        {showAdmin && (
                            <div className="log-in-row">
                                <li className="nav-item">
                                    <Link to={"/payment"} className="navigation-link">
                                        Оплатить
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/transfer"} className="navigation-link">
                                        Перевести
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/history"} className="navigation-link">
                                        История операций
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{
                                        pathname: "/admin",
                                        state: {
                                            username: currentUser.username
                                        }
                                    }} className="navigation-link">
                                        Пользователи
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/account"} className="navigation-link">
                                        Платежи
                                    </Link>
                                </li>

                            </div>
                        )}
                        {showLeti && (
                                <li className="nav-item">
                                    <Link to={{
                                        pathname: "/account",
                                        state: {
                                            username: currentUser.username
                                        }
                                    }} className="navigation-link">
                                        Платежи
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
            </div>
        );
    }
}
