import React from "react";
import UserService from "../../services/UserService";
import MasterCard from "../../assets/mastercard_logo.png";
import Visa from "../../assets/Visa.png"
import Mir from "../../assets/mir.png"
import StorageService from "../../services/StorageService";
import "./card.css"

class CardsTable extends React.Component {

    state = {
        userReady: false,
        currentUser: {username: ""},
        cardData: null
    }

    componentDidMount() {
        const currentUser = StorageService.getUser();
        console.log(currentUser);
        UserService.getCardInfo(currentUser.id).then(
            response => {
                const cardData = response.data;
                console.log(cardData);
                this.setState({
                    cardData: cardData,
                    currentUser: currentUser,
                    userReady: true
                });
                this.props.setActive(false);
            }
        );
    }


    render() {
        const {cardData} = this.state;
        return (
            <div>
                {(this.state.userReady) ?
                    <div className="my-card">

                        <div className="card-info">
                            <div>
                                <h6 className="card-owner">
                                    {cardData.cardOwner}
                                </h6>
                                <p className="card-cost">
                                    {cardData.cardCheck}₽
                                </p>
                            </div>
                            <p className="card-number">
                                {cardData.cardNumber}
                            </p>
                        </div>
                        <div className="card-icon-date">

                            {(cardData.cardName.includes("mastercard")) &&
                                <div className="card-img">
                                    <img className="card-icon" src={MasterCard} alt="Card icon" style={{width: "60px"}}/>
                                </div>
                            }

                            {(cardData.cardName.includes("visa")) &&
                                <div className="card-img">
                                    <img className="card-icon" src={Visa} alt="Card icon"/>
                                </div>
                            }

                            {(cardData.cardName.includes("mir")) &&
                                <div className="card-img">
                                    <img className="card-icon" src={Mir} alt="Card icon"/>
                                </div>
                            }

                            <p className="card-date">
                                {cardData.endDate}
                            </p>
                        </div>
                    </div> : null}
            </div>
        );
    }
}

export default CardsTable;