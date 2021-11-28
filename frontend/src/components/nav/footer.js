import React, {Component} from 'react';
import "./footer.css"
import BlueLogo from "../../assets/bluelogo.png"


export default class Navbar extends Component {

    render() {

        return (
            <div className="my-footer">
                <div className="footer-left">
                    <img className="footer-logo" src={BlueLogo} alt="logo"/>
                    <p className="footer-language">RU <span className="footer-lan-en">EN</span></p>
                </div>
                <div className="footer-right">
                    <div className="footer-adress"><p>Санкт-Петербург, ул. Профессора Попова, 5</p>
                        <h6>Не получается войти в аккаунт?</h6>
                    </div>
                    <div className="footer-politics"><p>Политика обработки и защиты персональных данных</p>
                        <p>Пользовательское соглашение</p>
                    </div>
                </div>
            </div>
        );
    }
}
