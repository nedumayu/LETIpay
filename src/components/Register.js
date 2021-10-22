import React, {Component} from "react";

import AuthService from "../services/AuthService";
import {Link} from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }

    onChangeInput(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleRegister(e) {
        e.preventDefault();
        if (isEmpty(this.state.username) || isEmpty(this.state.password) || isEmpty(this.state.email)) {
            const resMessage = "Заполните поля";

            this.setState({
                message: resMessage,
                successful: false
            });
            return;
        }

        AuthService.register(this.state.username, this.state.email, this.state.password)
            .then(response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message;
                    this.setState({
                        successful: false,
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
                        {!this.state.successful && (
                            <div>
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
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
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
                                    <button onClick={this.handleRegister}>
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                        )}
                        {this.state.message && (
                            <div style={{color: 'red'}}>
                                <div>{this.state.message}</div>
                            </div>
                        )}
                        <Link to="/home">На главную</Link>
                    </form>
                </div>

            </div>
        );
    }
}
