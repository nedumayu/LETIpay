import React, {useState} from "react";
import Modal from "../modal/Modal";
import AdminTable from "./AdminTable";
import "./table.css"
import AddNewUser from "./AddNewUser";

const AdminPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return(
        <div className="table-container">
            <button className="my-button" onClick={() => setModalActive(true)}>
                Добавить пользователя
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <AddNewUser setActive={setModalActive}/>
            </Modal>
            <AdminTable />
        </div>
    )
}

export default AdminPage;