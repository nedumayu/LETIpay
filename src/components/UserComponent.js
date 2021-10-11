import React from "react";
import axios from "axios";
import UserService from "../services/UserService";

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers()
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render (){
        return (
            <div>
                <h1>Список пользователей</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Имя</td>
                        <td>Фамилия</td>
                        <td>E-mail</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>

            </div>
        )
    }
}

export default UserComponent