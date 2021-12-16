import React, {useState} from "react";
import Modal from "../modal/Modal";
import AdminTable from "./AdminTable";
import "./table.css"
import AddNewUser from "./AddNewUser";
import RoleService from "../../services/RoleService";
import Error from "../Error";

const AdminPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const isAdmin = RoleService.hasRole("ADMIN");

    return (

        <div className="table-container">
            {isAdmin  ?
                <div>
                    <button className="add-user-button" onClick={() => setModalActive(true)}>
                        Добавить пользователя
                    </button>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <AddNewUser setActive={setModalActive}/>
                    </Modal>
                    <AdminTable/>
                </div> : <Error/>
            }
        </div>
    )
}

export default AdminPage;