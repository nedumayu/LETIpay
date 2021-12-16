import React from 'react';
import BankingAnimation from "./animations/BankingAnimation";

class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div style={{marginRight: "100px"}}>
                    <h1 style={{fontWeight: "800", fontSize: "50px", marginBottom: "50px"}} >Добро пожаловать в <span style={{color: "#347CE1"}}>LETIpay</span>!</h1>
                    <p>Сервис, разработанный специально для студентов ЛЭТИ</p>
                    <p>Приложение позволит легко и быстро совершать переводы
                        и производить своевременную оплату обучения</p>
                </div>
                <div style={{width: "800px"}}>
                    <BankingAnimation/>
                </div>
            </div>
        );
    }
}

export default Home;