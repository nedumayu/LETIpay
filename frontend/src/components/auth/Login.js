import React, {Component} from "react";

import AuthService from "../../services/AuthService";
import isEmpty from "validator/es/lib/isEmpty";
import "./auth.css"


export default class Login extends Component {
    state = {
        userData: {
            email: "",
            password: "",
        },
        loading: false,
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

    handleLogin = (event) => {
        event.preventDefault();
        if (isEmpty(this.state.userData.email) || isEmpty(this.state.userData.password)) {
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
        AuthService.login(this.state.userData).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload();
                this.setState({
                    isLoading: false,
                });
            }).catch((error) => {
                let resMessage = error?.response?.data?.message === "Bad credentials" ? "Неверные данные" : "Заполните поля";
                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }

    render() {
        return (
            <div className="my-form">
                <form>
                    <div>
                        <input type="text" name="email" placeholder="E-mail" //autoComplete="off"
                               className="my-input" value={this.state.userData.email}
                               onChange={this.onChangeInput}/>
                        <input type="password" name="password" placeholder="Пароль" autoComplete="off"
                               className="my-input" value={this.state.userData.password}
                               onChange={this.onChangeInput}/>
                        <button onClick={this.handleLogin}>Войти</button>
                    </div>
                    {this.state.message && (
                        <div className="message">{this.state.message}</div>
                    )}
                </form>
            </div>
        );
    }
}
