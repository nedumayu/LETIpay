import PayHistory from "./PayHistory";
import TransHistory from "./TransHistory";
import React, {useEffect, useState} from "react";
import UserService from "../../services/UserService";
import NoResultAnimation from "../animations/NoResultAnimation";

const HistoryContainer = () => {

    const [PaymentsIsNull, setPaymentsIsNull] = useState(true);
    const [TransfersIsNull, setTransfersIsNull] = useState(true);

    useEffect(() => {
        fetchingPayments();
        fetchTransfers();
    }, [])

    const fetchingPayments = () => {
        UserService.getUserPay().then(
            response => {
                const pays = response.data;
                if (pays.length !== 0) {
                    setPaymentsIsNull(false);
                }
            })
    }

    const fetchTransfers = () => {
        UserService.getUserTrans().then(
            response => {
                const trans = response.data;
                if (trans.length !== 0) {
                    setTransfersIsNull(false);
                }
        })
    }


    return(
        (PaymentsIsNull && TransfersIsNull)===true ?
            <div style={{width: "600px", margin: "20px auto"}}>
                <h3 style={{textAlign: "center"}}>Еще не совершено ни одной операции</h3>
                <div style={{width: "400px", margin: "0 auto"}}><NoResultAnimation/></div>
            </div> :

        <div style={{width: "1200px", display: "flex", justifyContent: "space-between", margin: "20px auto"}}>
            <PayHistory/>
            <TransHistory/>
        </div>
    )
}

export default HistoryContainer;