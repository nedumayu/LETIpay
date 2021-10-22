import React, {Component} from "react";

import AuthService from "../services/AuthService";
import {Link} from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeInput(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }


    handleLogin(e) {
        e.preventDefault();
        if (isEmpty(this.state.username) || isEmpty(this.state.password)) {
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

        AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload();
            },
            error => {
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
                            <label htmlFor="username">Имя пользователя</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangeInput}
                            />
                        </div>
                        <div>
                            <button onClick={this.handleLogin}>
                                Войти
                            </button>
                        </div>
                        {this.state.message && (
                            <div>
                                <div style={{color: 'red'}}>
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
