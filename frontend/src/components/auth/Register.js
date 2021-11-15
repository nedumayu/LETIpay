import React, {Component} from "react";

import AuthService from "../services/AuthService";
import {Link} from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";


export default class Register extends Component {
    /*constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);*/

        state = {
            userInfo: {
                username: "",
                email: "",
                password: "",
                telephone: "",
                groupNumber: "",
            },
            successful: false,
            message: ""
        };
    //}

    onChangeInput= (event) => {
        const {name, value} = event.target;
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [name]: value
            }
        });
    }

    handleRegister= (event) => {
        event.preventDefault();
        if (isEmpty(this.state.userInfo.username) || isEmpty(this.state.userInfo.password) ||
            isEmpty(this.state.userInfo.email) ||
            isEmpty(this.state.userInfo.telephone) || isEmpty(this.state.userInfo.groupNumber)) {
            const resMessage = "Заполните поля";

            this.setState({
                message: resMessage,
                successful: false
            });
            return;
        }

        AuthService.register(this.state.userInfo)
            .then(response => {
                    this.setState({
                        userInfo: {
                            username: "",
                            email: "",
                            password: "",
                            telephone: "",
                            groupNumber: "",
                        },
                        message: response.data.message,
                        successful: true
                    });
    }).catch((error)=>{
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message;
                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                });
    }

    render() {
        return (
            <div>
                <div className="window">
                    <form>
                        {!this.state.successful && (
                            <div>
                                <div>
                                    <input
                                        type="text"
                                        name="username"
                                        value={this.state.userInfo.username}
                                        onChange={this.onChangeInput}
                                        placeholder='ФИО'
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="groupNumber"
                                        value={this.state.userInfo.groupNumber}
                                        onChange={this.onChangeInput}
                                        placeholder='Номер группы'
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.state.userInfo.email}
                                        onChange={this.onChangeInput}
                                        placeholder='E-mail'
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        value={this.state.userInfo.telephone}
                                        onChange={this.onChangeInput}
                                        placeholder='Телефон'
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.userInfo.password}
                                        onChange={this.onChangeInput}
                                        placeholder='Пароль'
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
                            <div>
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
