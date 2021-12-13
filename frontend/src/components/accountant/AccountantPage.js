import React, {useEffect, useState} from "react";
import UserService from "../../services/UserService";
import "./accountantTable.css"
import {PaymentTable} from "./PaymentTable"
import RoleService from "../../services/RoleService";
import Error from "../Error"
import {Spinner} from "react-bootstrap";
import Modal from "../modal/Modal";
import AddGrants from "./AddGrants";

const AccountantPage = () => {

    const [payments, setPayments] = useState([]);
    const isAccountant = RoleService.hasRole("LETI");
    const isAdmin = RoleService.hasRole("ADMIN");
    const [isLoading, setIsLoading] = useState(true);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        fetchingData()

    }, [])

    const fetchingData = () => {
        UserService.getAccountantInfo().then(
            response => {
                const payInfo = response.data.payments;
                setPayments(payInfo)
                setIsLoading(false);
            },
            error => {
                console.error(error);
            }
        )
    }


    return (
        (isAccountant || isAdmin) ?
            <div className="table-container">
                <button className="add-user-button"
                        onClick={() => setModalActive(true)}>
                    Начислить стипендию
                </button>

                <Modal active={modalActive} setActive={setModalActive}>
                    <AddGrants setActive={setModalActive}/>
                </Modal>

                {isLoading ?
                <div style={{width: "20px", margin: "200px auto"}}>
                    <Spinner animation="border" variant="primary"/>
                </div>
                : <PaymentTable data={payments}/>}

            </div>

            : <Error/>
    );
}

export default AccountantPage;