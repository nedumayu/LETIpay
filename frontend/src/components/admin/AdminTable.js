import React from "react";
import UserService from "../../services/UserService";

class AdminTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getAdminBoard()
            .then(res => {
                const users = res.data;
                this.setState({users});
            })
    }

    render() {
        return (
            <div className="block">
                <h3>Список пользователей</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Имя</td>
                        <td>E-mail</td>
                        <td>N group</td>
                        <td>Telephone</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.groupNumber}</td>
                                    <td>{user.telephone}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>

            </div>
        )
    }
}

export default AdminTable