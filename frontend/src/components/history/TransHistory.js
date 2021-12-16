import React, {useEffect, useState} from "react";
import UserService from "../../services/UserService";
import "./history.css"
import EmptyAnimation from "../animations/EmptyAnimation";
import {Spinner} from "react-bootstrap";

const TransHistory = () => {

    const [trans, setTrans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchTransfers()

    }, [])

    const fetchTransfers = () => {
        setIsLoading(true);
        UserService.getUserTrans().then(response => {
            const trans = response.data;
            setTrans(trans);
            setIsLoading(false);
        })
    }

    return (
        isLoading ?
            <div style={{width: "20px", margin: "100px auto"}}>
                <Spinner animation="border" variant="primary"/>
            </div> :
        <div className="payContainer">
            {trans.length !== 0 ?
                <div>
                    <h3 style={{margin: "20px"}}>Переводы</h3>
                    <div>
                        {trans.map(tran =>
                            <div className="payObject" style={{width: "550px"}} key={tran.id}>
                                <div style={{paddingRight: "20px"}}>
                                    <p className="payName"><span
                                        style={{color: "gray"}}>Перевод пользователю </span>{tran.transTelephone}</p>
                                    <p className="paySum">{tran.transSum} ₽</p>
                                </div>
                                <p className="payDate">{tran.transDate}</p>
                            </div>
                        )}
                    </div>
                </div> :
                <div>
                    <h3 style={{margin: "20px", textAlign: "center"}}>Переводы не найдены</h3>
                    <div style={{width: "400px"}}><EmptyAnimation/></div>
                </div>}
        </div>
    );
};

export default TransHistory;