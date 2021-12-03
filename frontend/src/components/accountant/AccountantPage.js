import React from "react";
import UserService from "../../services/UserService";
import "./accountantTable.css"

class AccountantPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            payments: []
        }
    }


    componentDidMount() {
        UserService.getAccountantInfo()
            .then(res => {
                this.setState({payments: res.data});
            })
    }


    render() {
        return (
            <div className="table-container">
                <h3 style={{marginTop: "20px"}}>Список платежей</h3>
                <table className="account-table">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Название</td>
                        <td>Сумма</td>
                        <td>Дата</td>
                    </tr>
                    </thead>
                    <tbody>{
                        this.state.payments.map(
                            payment =>
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.payName}</td>
                                <td>{payment.paySum}</td>
                                <td>{payment.payDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    /*state = {
        cardData: []
    }

    componentDidMount() {
        UserService.getAccountantInfo()
            .then(res => {
                const cardData = res.data;
                this.setState({cardData});
            })
    }


    delete = (id) => {
        UserService.deleteUser(id).then(
            response => {
                window.location.reload()
            },
            error => {
                console.log(error.response)
            }
        )
    }

    render() {
        console.log(this.state.cardData);
        return (
            <div>
                <h3 style={{marginTop: "20px"}}>Список пользователей</h3>
                <table className="mtable">
                    <thead>
                    <tr>

                        <td>card name</td>
                        <td>owner</td>
                        <td>Номер card</td>
                        <td>end date</td>
                        <td>check</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>{
                        this.state.cardData.map(cardData =>
                            <tr key={cardData.cardName}>

                                <td>{cardData.cardName}</td>
                                <td>{cardData.cardOwner}</td>
                                <td>{cardData.cardNumber}</td>
                                <td>{cardData.endDate}</td>
                                <td>{cardData.cardCheck}</td>
                                <td><button className="delete-button" style={{margin: "5px"}} onClick={() => this.delete(cardData.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }*/
}
export default AccountantPage;