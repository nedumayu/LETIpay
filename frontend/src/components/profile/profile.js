import React, {Component} from "react";
import {Link} from "react-router-dom";
import AuthService from "../services/AuthService";
import EventBus from "../services/EventBus";
import UserService from "../services/UserService";
import LStorageUser from "../services/LStorageUser";


export default class Profile extends Component {
    state = {
        userReady: false,
        currentUser: { username: "" },
        userInfo: null
    }

    componentDidMount() {
        const currentUser = LStorageUser.getUser();
        UserService.getUserBoard(currentUser.id).then(
            response => {
                const userInfo = response.data;

                this.setState({
                    userInfo: userInfo,
                    currentUser: currentUser,
                    userReady: true
                });
            }
        );
        /*if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })*/

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            currentUser: undefined,
        });
    }

    render() {
        const { userInfo } = this.state;
        return (<div className="container">
            {(this.state.userReady) ?

            <div className="profile">
                <h3>Профиль пользователя</h3>
                <img className="avatar" src="" alt="Неопознанный Енот" width="100" height="100">
                <div>
                    ФИО:  {userInfo.username}
                </div>

                <div>
                    E-mail: {userInfo.email}
                </div>

                <div>
                    Телефон: {userInfo.telephone}
                </div>

                <div>
                    Группа №{userInfo.groupNumber}
                </div>
            </div>
         : null}
            {/*<Link to="/login" onClick={this.logOut}>
            Выйти
        </Link>*/}
        </div>
    );

    }
}
