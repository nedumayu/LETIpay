import React from "react";
import UserService from "../../services/UserService";
import "./history.css"

class TransHistory extends React.Component {

    state = {
        trans: [],
    }

    componentDidMount() {
        UserService.getUserTrans()
            .then(res => {
                const trans = res.data;
                this.setState({trans});
            })
    }


    render() {
        return (
            <div className="payContainer">
                <h3 style={{margin: "20px"}}>Переводы</h3>
                <div>
                    {this.state.trans.map(tran =>
                        <div className="payObject" style={{width: "550px"}} key={tran.id}>
                            <div style={{paddingRight: "20px"}}>
                                <p className="payName"><span style={{color: "gray"}}>Перевод пользователю </span>{tran.transTelephone}</p>
                                <p className="paySum">{tran.transSum} ₽</p>
                            </div>
                            <p className="payDate">{tran.transDate}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default TransHistory;