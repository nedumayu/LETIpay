import React, { Component } from "react";
import UserService from "../../services/UserService";
import isEmpty from "validator/es/lib/isEmpty";
import "./pay.css"
import StorageService from "../../services/StorageService";

export default class Payment extends Component {
    state = {
        payData: {
            payName: "",
            paySum: "",
            payDate: "",
            card: ""
        },
        message: "",
        successful: false,
    };

    onChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            payData: {
                ...this.state.payData,
                [name]: value
            }
        });
    }

    handlePay = async (event) => {
        event.preventDefault();

        if (isEmpty(this.state.payData.payName) || isEmpty(this.state.payData.paySum)) {
            const resMessage = "Заполните поля";
            this.setState({
                message: resMessage,
                successful: false
            });
            return;
        }

        const date = new Date();
        //const user = StorageService.getId();

        await this.setState({
            payData: {
                ...this.state.payData,
                payDate: date,
                //payUser: user
            }
        });

        console.log(this.state.payData);

        UserService.addPayment(this.state.payData).then(response => {
            this.setState({
                payData: {
                    payName: "",
                    paySum: "",
                },
                message: response.data.message,
                successful: true
            });
            //window.location.reload();
        }).catch((error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message;
            this.setState({
                message: resMessage,
                successful: false
            });
        });
    }

    render() {
        return (
            <div className="my-form">
                    <form>
                        {!this.state.successful && (
                            <div>
                                <input type="text" name="payName" placeholder='Название платежа' autoComplete="off"
                                       value={this.state.payData.payName}
                                       onChange={this.onChangeInput}/>
                                <input type="text" name="paySum" placeholder='Сумма платежа' autoComplete="off"
                                       value={this.state.payData.paySum}
                                       onChange={this.onChangeInput}/>
                                <button className="add-new-user-button" onClick={this.handlePay}>Оплатить</button>
                            </div>
                        )}
                        {this.state.message && (
                            <div className="message">{this.state.message}</div>
                        )}
                    </form>
            </div>
        );
    }
}
