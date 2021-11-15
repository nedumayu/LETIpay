import React, { Component } from "react";
import UserService from "../services/UserService";
import StorageService from "../services/StorageService";

export default class AdminBoard extends Component {
    state = {
        content: "",
        email: ""
    };

    componentDidMount() {
        const currentUser = StorageService.getUser();
        UserService.getAdminBoard().then(
            response => {

                this.setState({
                    content: response.data,
                    email: currentUser.email
                });
            },
            error => {
                let errorMsg =  error.response?.data?.message || error.message;
                this.setState({
                    content: errorMsg
                });
            }
        );
    }

    render() {
        const email = this.state.email;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content + email}</h3>
                </header>
            </div>
        );
    }
}
