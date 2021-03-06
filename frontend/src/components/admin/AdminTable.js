import React from "react";
import UserService from "../../services/UserService";

class AdminTable extends React.Component {

    state = {
        users: [],
    }

    componentDidMount() {
        UserService.getAdminBoard()
            .then(res => {
                const users = res.data;
                this.setState({users});
            })
    }


    delete = (id) => {
        UserService.deleteUser(id).then(
            response => {
                window.location.reload()
            },
            error => {
                console.log(error.response)
            }
        )
    }

    render() {
        return (
            <div>
                <h3 style={{marginTop: "20px"}}>Список пользователей</h3>
                <table className="admin-table">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Имя</td>
                        <td>E-mail</td>
                        <td>Номер группы</td>
                        <td>Телефон</td>
                        <td>Действие</td>
                    </tr>
                    </thead>
                    <tbody>{
                        this.state.users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.groupNumber}</td>
                                <td>{user.telephone}</td>
                                <td><button className="delete-button" style={{margin: "5px"}} onClick={() => this.delete(user.id)}>Удалить</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminTable