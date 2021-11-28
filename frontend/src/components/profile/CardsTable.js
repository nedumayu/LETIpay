import React from "react";
import UserService from "../../services/UserService";
import plasticCard from "../../assets/mastercard_logo.png";
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
                            <div><h5 className="card-name">
                                {cardData.cardName}
                            </h5>

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
                            <div className="card-img">
                                <img className="card-icon" src={plasticCard} alt="Card icon"/>
                            </div>
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