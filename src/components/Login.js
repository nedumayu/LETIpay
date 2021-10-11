import React from "react";
import axios from "axios";

class Login extends React.Component {

    render() {
        return (
            <div>
                <h1>Страница авторизации</h1>
                <form method="post" action="/login">
                    <h3>Имя пользователя </h3>
                    <input type="text" name="username" placeholder="Введите q"/>
                    <h3>Пароль</h3>
                    <input type="password" name="password" placeholder="Введите w"/>
                    <div><input type="submit" value="Войти"/></div>
                </form>
            </div>
        );
    }
}

export default Login;