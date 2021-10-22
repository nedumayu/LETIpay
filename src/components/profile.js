import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import AuthService from "../services/AuthService";
import UserComponent from "./UserComponent";
import EventBus from "../services/EventBus";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" }
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })

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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { currentUser } = this.state;

        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div className="block">
                        <h3> Профиль пользователя {" "}
                            {currentUser.username}
                        </h3>
                        <div>
                            Id:{" "} {currentUser.id}
                        </div>
                        <div>
                            Имя:{" "} {currentUser.username}
                        </div>

                        <div>
                            Email:{" "} {currentUser.email}
                        </div>
                        <div>
                            Роль:{" "} {currentUser.roles}
                        </div>
                    </div>: null}
                <UserComponent />
                <Link to="/login" onClick={this.logOut}>
                    Выйти
                </Link>
            </div>
        );
    }
}
