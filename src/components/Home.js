import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>
                    Добро пожаловать в LETI pay!
                </h2>
                <Link to="/main">Авторизоваться</Link>
            </div>
        );
    }
}

export default Home;