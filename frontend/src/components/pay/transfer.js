import React, { Component } from "react";
import UserService from "../../services/UserService";
import isEmpty from "validator/es/lib/isEmpty";

export default class Transfer extends Component {
    state = {
        transData: {
            transTelephone: "",
            transSum: "",
            transDate: ""
        },
        message: "",
        successful: false
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
                successful: false
            });
            return;
        }

        const date = new Date().toLocaleString().slice(0,-3);

        await this.setState({
            transData: {
                ...this.state.transData,
                transDate: date,
            }
        });

        UserService.addTransfer(this.state.transData).then(response => {
            this.setState({
                transData: {
                    transTelephone: "",
                    transSum: "",
                },
                message: response.data.message,
                successful: true
            });

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
                        <input type="text" name="transTelephone" placeholder='Номер телефона получателя' autoComplete="off"
                               value={this.state.transData.transTelephone}
                               onChange={this.onChangeInput}/>
                        <input type="text" name="transSum" placeholder='Сумма перевода' autoComplete="off"
                               value={this.state.transData.transSum}
                               onChange={this.onChangeInput}/>
                        <button className="add-new-user-button" onClick={this.handleTrans}>Перевести</button>
                    </div>)}
                    {this.state.message && (
                        <div className="message">{this.state.message}</div>
                    )}
                </form>
            </div>
        );
    }
}
