import React, {Component} from "react";
import AuthService from "../../services/AuthService";
import "./auth.css"
import RegisterValid from "../../services/validation/RegisterValid";

export default class Register extends Component {
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

        let res = RegisterValid.signupValid(this.state.userData);

        if (res.result) {
            const resMessage = res.message;
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
                            <input type="text" name="username" placeholder='ФИО' autoComplete="off"
                                   className="my-input" value={this.state.userData.username}
                                   onChange={this.onChangeInput}/>
                            <input type="text" name="groupNumber" placeholder='Номер группы' autoComplete="off"
                                   className="my-input" value={this.state.userData.groupNumber}
                                   onChange={this.onChangeInput}/>
                            <input type="email" name="email" placeholder='E-mail' autoComplete="off"
                                   className="my-input" value={this.state.userData.email}
                                   onChange={this.onChangeInput}/>
                            <input type="tel" name="telephone" placeholder='Телефон' autoComplete="off"
                                   className="my-input" value={this.state.userData.telephone}
                                   onChange={this.onChangeInput}/>
                            <input type="password" name="password" placeholder='Пароль' autoComplete="off"
                                   className="my-input" value={this.state.userData.password}
                                   onChange={this.onChangeInput}/>
                            <button onClick={this.handleRegister}>Зарегистрироваться</button>
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
