import React, {Component} from "react";

import AuthService from "../services/AuthService";
import {Link} from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";
import LStorageUser from "../services/LStorageUser";


export default class Login extends Component {


        state = {
            userInfo: {
                email: "",
                password: "",
            },
            loading: false,
            message: ""
        };

    onChangeInput= (event) => {
        const {name, value} = event.target;

        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [name]: value
            }
        });
    }

    componentDidMount() {
        const currentUser = LStorageUser.getUser();
        if (currentUser) this.setState({ redirect: "/user" });
    }

    handleLogin= (event) => {
        event.preventDefault();
        if (isEmpty(this.state.userInfo.email) || isEmpty(this.state.userInfo.password)) {
            const resMessage = "Заполните поля";
            this.setState({
                message: resMessage,
                loading: false
            });
            return;
        }
        this.setState({
            isLoading: true
        });

        AuthService.login(this.state.userInfo).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload();
                this.setState({
                    isLoading: false,
                });
            }).catch((error)=> {
                let resMessage = (error.response && error.response.data && error.response.data.message) || error.message;
                resMessage = resMessage === "Bad credentials" ? "Неверные данные" : "Заполните поля";

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }

    render() {
        return (
            <div>
                <div className="window">
                    <form>
                        <div>
                            <input
                                type="text"
                                name="email"
                                value={this.state.userInfo.email}
                                onChange={this.onChangeInput}
                                placeholder="E-mail"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                value={this.state.userInfo.password}
                                onChange={this.onChangeInput}
                                placeholder="Пароль"
                            />
                        </div>
                        <div>
                            <button onClick={this.handleLogin}>
                                Войти
                            </button>
                        </div>
                        {this.state.message && (
                            <div>
                                <div>
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <Link to="/home">На главную</Link>
                    </form>

                </div>

            </div>
        );
    }
}
