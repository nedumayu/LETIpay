import React, {useEffect, useState} from "react";
import UserService from "../../services/UserService";
import "./history.css"
import EmptyAnimation from "../animations/EmptyAnimation";
import {Spinner} from "react-bootstrap";

const PayHistory = () => {

    const [pays, setPays] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchingPayments()

    }, [])

    const fetchingPayments = () => {
        UserService.getUserPay().then(
            response => {
                const paysInfo = response.data;
                setPays(paysInfo);
                setIsLoading(false);
            },
            error => {
                console.error(error);
            })
    }

    return (

        isLoading ?
            <div style={{width: "20px", margin: "100px auto"}}>
                <Spinner animation="border" variant="primary"/>
            </div> :
            <div className="payContainer">
                {pays.length !== 0 ?
                    <div>
                        <h3 style={{margin: "20px"}}>Платежи</h3>
                        <div>
                            {pays.map(pays =>
                                <div className="payObject" key={pays.id}>
                                    <div style={{paddingRight: "10px"}}>
                                        <p className="payName">Оплата за {pays.payName.toLowerCase()}</p>
                                        <p className="paySum">{pays.paySum} ₽</p>
                                    </div>
                                    <p className="payDate">{pays.payDate}</p>
                                </div>
                            )}
                        </div>
                    </div> :
                    <div>
                        <h3 style={{margin: "20px", textAlign: "center"}}>Платежи не найдены</h3>
                        <div style={{width: "400px"}}><EmptyAnimation/></div>
                    </div>}
            </div>
    );
};

export default PayHistory;