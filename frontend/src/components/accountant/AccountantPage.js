import React, { Component } from "react";
import UserService from "../../services/UserService";
import "./accountantTable.css"

export default class AccountantPage extends Component {
    state = {
        payments: []
    }

    componentDidMount() {
        UserService.getAccountantInfo()
            .then(res => {
                const payments = res.data;
                this.setState({payments});
            })
    }

    render() {
        console.log(this.state.payments);
        return (
            <div className="table-container">
                <h3 style={{marginTop: "20px"}}>Список платежей</h3>
                <table className="account-table">
                    <thead>
                    <tr>
                        <td>Id платежа</td>
                        <td>Название оплаты</td>
                        <td>Сумма оплаты</td>
                        <td>Дата оплаты</td>
                        <td>id карты</td>
                    </tr>
                    </thead>
                    <tbody>{
                        this.state.payments.map(payment =>
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.payName}</td>
                                <td>{payment.paySum}</td>
                                <td>{payment.payDate}</td>
                                <td>{payment.card}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
