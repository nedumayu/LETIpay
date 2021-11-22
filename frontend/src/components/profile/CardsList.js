import React, {useState} from "react";
import Modal from "../modal/Modal";
import "./profile.css"
import AddNewCard from "./AddNewCard"
import CardsTable from "./CardsTable";

const CardsList = () => {
    const [modalActive, setModalActive] = useState(false);
    const [hasCard, setHasCard] = useState(true)

    return (
        <div className="cards">
            {(!hasCard) ?
                <div></div> :
                <button className="my-button"
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