import React, { Component } from "react";
import UserService from "../../services/UserService";
import StorageService from "../../services/StorageService";
import isEmpty from "validator/es/lib/isEmpty";

export default class Transfer extends Component {
    state = {
        transData: {
            transTelephone: "",
            transSum: "",
            /*cardNumber: "",
            endDate: "",
            cardCheck: ""*/
        },
        message: ""
    };

    onChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            transData: {
                ...this.state.transData,
                [name]: value
            }
        });
    }

    handleTrans = async (event) => {
        event.preventDefault();

        if (isEmpty(this.state.transData.transTelephone) || isEmpty(this.state.transData.transSum)) {
            const resMessage = "Заполните поля";
            this.setState({
                message: resMessage,
            });
            return;
        }

        /*const Check = Math.round(Math.random() * (50000 - 1000) + 1000);

        await this.setState({
            transData: {
                ...this.state.transData,
                cardCheck: Check,
            }
        });*/

        UserService.postTransfer(this.state.transData).then(response => {
            this.setState({
                transData: {
                    transTelephone: "",
                    transSum: "",
                    /*cardNumber: "",
                    endDate: ""*/
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
                        <input type="text" name="transTelephone" placeholder='Номер телефона получателя' autoComplete="off"
                               value={this.state.transData.transTelephone}
                               onChange={this.onChangeInput}/>
                        <input type="text" name="transSum" placeholder='Сумма перевода' autoComplete="off"
                               value={this.state.transData.transSum}
                               onChange={this.onChangeInput}/>
                        <button className="add-new-user-button" onClick={this.handleTrans}>Перевести</button>
                    </div>
                </form>
            </div>
        );
    }
}
