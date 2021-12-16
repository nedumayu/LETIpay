import React, {useState} from "react";
import Modal from "../modal/Modal";
import "./profile.css"
import AddNewCard from "./AddNewCard"
import CardsTable from "./CardsTable";
import StorageService from "../../services/StorageService";

const CardsList = () => {
    const [modalActive, setModalActive] = useState(false);
    const [hasCard, setHasCard] = useState(true)

    const user = StorageService.getUser();
    const isAccountant = user?.roles.includes("ROLE_LETI");

    console.log(user);

    return (
        <div className="cards">
            {(!hasCard || isAccountant) ?
                <div></div> :
                <button className="add-card-button"
                        onClick={() => setModalActive(true)}>
                    Добавить карту
                </button>}

            <Modal active={modalActive} setActive={setModalActive}>
                <AddNewCard setActive={setModalActive}/>
            </Modal>

            <CardsTable setActive={setHasCard}/>
        </div>
    )
}

export default CardsList;