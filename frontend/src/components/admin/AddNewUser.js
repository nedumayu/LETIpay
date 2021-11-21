import React, {Component} from "react";

import AuthService from "../../services/AuthService";
import isEmpty from "validator/es/lib/isEmpty";
import "./addUser.css"

export default class AddNewUser extends Component {
    state = {
        userData: {
            username: "",
            email: "",
            password: "",
            telephone: "",
            groupNumber: "",
        },
        successful: false,
        message: ""
    };

    onChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        });
    }

    handleRegister = (event) => {
        event.preventDefault();
        if (isEmpty(this.state.userData.username) || isEmpty(this.state.userData.password) ||
            isEmpty(this.state.userData.email) ||
            isEmpty(this.state.userData.telephone) || isEmpty(this.state.userData.groupNumber)) {
            const resMessage = "Заполните поля";
            this.setState({
                message: resMessage,
                successful: false
            });
            return;
        }
        AuthService.register(this.state.userData).then(response => {
            this.setState({
                userData: {
                    username: "",
                    email: "",
                    password: "",
                    telephone: "",
                    groupNumber: "",
                },
                message: response.data.message,
                successful: true
            });
        }).catch((error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message;
            this.setState({
                successful: false,
                message: resMessage
            });
        });
    }

    render() {
        return (
            <div className="my-form">
                <form>
                    {!this.state.successful && (
                        <div>
                            <input type="text" name="username" placeholder='ФИО'
                                   value={this.state.userData.username}
                                   onChange={this.onChangeInput}/>
                            <input type="text" name="groupNumber" placeholder='Номер группы'
                                   value={this.state.userData.groupNumber}
                                   onChange={this.onChangeInput}/>
                            <input type="email" name="email" placeholder='E-mail'
                                   value={this.state.userData.email}
                                   onChange={this.onChangeInput}/>
                            <input type="tel" name="telephone" placeholder='Телефон'
                                   value={this.state.userData.telephone}
                                   onChange={this.onChangeInput}/>
                            <input type="password" name="password" placeholder='Пароль'
                                   value={this.state.userData.password}
                                   onChange={this.onChangeInput}/>
                            <button onClick={this.handleRegister}>Добавить</button>
                        </div>
                    )}
                    {this.state.message && (
                        <div className="message">{this.state.message}</div>
                    )}
                </form>
            </div>
        );
    }
}
