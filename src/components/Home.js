import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="block">
                <h2 style={{display: 'flex', justifyContent: 'center'}}>
                    Добро пожаловать в LETI pay!
                </h2>
                <Link to="/login">Авторизоваться</Link>
                <div></div>
                <Link to="/register">Зарегистрироваться</Link>
            </div>
        );
    }
}

export default Home;