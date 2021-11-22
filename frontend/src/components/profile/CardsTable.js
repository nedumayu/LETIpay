import React from "react";
import UserService from "../../services/UserService";
import plasticCard from "../../assets/plastic-card.png";
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
                        <div className="card-img"><img className="card-icon" src={plasticCard} alt="Card icon"/></div>
                        <div className="card-info">
                            <h6 className="card-name">
                                {cardData.cardName}
                            </h6>

                            <p className="card-number">
                                {cardData.cardOwner}
                            </p>
                            <p className="card-number">
                                {cardData.cardNumber}
                            </p>
                            <p className="card-number">
                                {cardData.endDate}
                            </p>
                        </div>
                        <div><p className="card-cost">
                            {cardData.cardCheck}₽
                        </p></div>
                    </div> : null}
            </div>
        );
    }
}

export default CardsTable;