import React, {Component} from "react";
import isEmpty from "validator/es/lib/isEmpty";
import UserService from "../../services/UserService";
import "./card.css"

export default class AddNewCard extends Component {
    state = {
        cardData: {
            cardName: "",
            cardOwner: "",
            cardNumber: "",
            endDate: "",
            cardCheck: ""
        },
        message: ""
    };

    onChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            cardData: {
                ...this.state.cardData,
                [name]: value
            }
        });
    }

    handleAdd = async (event) => {
        event.preventDefault();


        if (isEmpty(this.state.cardData.cardName) || isEmpty(this.state.cardData.cardOwner) ||
            isEmpty(this.state.cardData.cardNumber) ||
            isEmpty(this.state.cardData.endDate)) {
            const resMessage = "Заполните поля";
            this.setState({
                message: resMessage,
            });
            return;
        }

        const Check = Math.round(Math.random() * (50000 - 1000) + 1000);

        await this.setState({
            cardData: {
                ...this.state.cardData,
                cardCheck: Check,
            }
        });

        UserService.addCard(this.state.cardData).then(response => {
            this.setState({
                cardData: {
                    cardName: "",
                    cardOwner: "",
                    cardNumber: "",
                    endDate: ""
                },
            });
            this.props.setActive(false);
            window.location.reload();
        }).catch((error) => {
            const resMessage = error.response?.data?.message || error.message;
            this.setState({
                message: resMessage
            });
        });
    }

    render() {

        return (
            <div className="my-form">
                <form>
                    <div>
                        <input type="text" name="cardName" placeholder='Название карты' autoComplete="off"
                               className="my-input" value={this.state.cardData.cardName}
                               onChange={this.onChangeInput}/>

                        <input type="text" name="cardOwner" placeholder='Держатель карты' autoComplete="off"
                               className="my-input" value={this.state.cardData.cardOwner}
                               onChange={this.onChangeInput}/>

                        <input type="text" name="cardNumber" placeholder='Номер карты' autoComplete="off"
                               className="my-input" value={this.state.cardData.cardNumber}
                               onChange={this.onChangeInput}/>

                        <input type="text" name="endDate" placeholder='Срок окончания' autoComplete="off"
                               className="my-input" value={this.state.cardData.endDate}
                               onChange={this.onChangeInput}/>

                        <button className="my-button"  onClick={this.handleAdd}>Добавить</button>
                    </div>
                </form>
            </div>
        );
    }
}
