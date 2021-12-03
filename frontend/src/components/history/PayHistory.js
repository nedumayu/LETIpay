import React from "react";
import UserService from "../../services/UserService";
import "./history.css"

class PayHistory extends React.Component {

    state = {
        pays: [],
    }

    componentDidMount() {
        UserService.getUserPay()
            .then(res => {
                const pays = res.data;
                this.setState({pays});
            })
    }


    render() {
        return (
            <div className="payContainer">
                <h3 style={{margin: "20px"}}>Платежи</h3>
                <div>
                    {this.state.pays.map(pay =>
                        <div className="payObject" key={pay.id}>
                            <div style={{paddingRight: "10px"}}>
                                <p className="payName">Оплата за {pay.payName}</p>
                                <p className="paySum">{pay.paySum} ₽</p>
                            </div>
                            <p className="payDate">{pay.payDate}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }


}

export default PayHistory;