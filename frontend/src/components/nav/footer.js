import React, {Component, useEffect, useState} from 'react';
import "./footer.css"
import BlueLogo from "../../assets/bluelogo.png"
import {Link} from "react-router-dom";
import StorageService from "../../services/StorageService";
import UserService from "../../services/UserService";


const Footer =()=> {

    const [isAuth, setIsAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect( () => {
        setIsAuth(StorageService.isExist())
        setCurrentUser(StorageService.getUser())
    }, [isAuth])

        return (
            <div className="my-footer">
                <div className="footer-left">
                    <img className="footer-logo" src={BlueLogo} alt="logo"/>
                    {/*<p className="footer-language">RU <span className="footer-lan-en">EN</span></p>*/}
                    <p className="footer-language">@2021 LETIpay</p>
                </div>
                <div className="footer-right">
                    <div className="footer-adress"><p>Санкт-Петербург, ул. Профессора Попова, 5</p>
                        {isAuth ?
                            <p>Вы вошли как пользователь {currentUser.email}</p> :
                        <p><Link to="/register" className="auth">Не получается войти в аккаунт?</Link></p>
                            }
                    </div>
                    <div>
                        <a className="footer-politics" href="https://etu.ru/assets/files/sotrudniku/Prikazi/politika-v-otnoshenii-personalnyh-dannyh.pdf">
                            Политика обработки и защиты персональных данных
                        </a><br/>
                        <a className="footer-politics" href="https://etu.ru/assets/files/sotrudniku/Prikazi/politika-konfidencialnosti-spbgetu-leti.pdf">
                            Пользовательское соглашение
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default Footer;