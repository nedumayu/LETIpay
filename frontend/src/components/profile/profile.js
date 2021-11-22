import React, {Component} from "react";
import UserService from "../../services/UserService";
import StorageService from "../../services/StorageService";
import "./profile.css"
import profileIcon from "../../assets/profile-icon-1.png"
import CardsList from "./CardsList";


export default class Profile extends Component {
    state = {
        userReady: false,
        currentUser: {username: ""},
        userData: null
    }

    componentDidMount() {
        const currentUser = StorageService.getUser();
        UserService.getUserProfile(currentUser.id).then(
            response => {
                const userData = response.data;
                this.setState({
                    userData: userData,
                    currentUser: currentUser,
                    userReady: true
                });
            }
        );
    }

    render() {
        const {userData} = this.state;
        return (<div className="container">
                {(this.state.userReady) ?
                    <div className="profile-card">
                        <div className="profile-info">
                            <img className="avatar" src={profileIcon} alt="Profile icon"/>
                            <div className="info">
                                <h4 className="name">{userData.username}</h4>
                                <p><b>Группа №</b>{userData.groupNumber}</p>
                                <p><b>E-mail:</b> {userData.email}</p>
                                <p><b>Телефон:</b> {userData.telephone}</p>
                            </div>
                        </div>
                        <CardsList/>
                    </div> : null}
            </div>
        );
    }
}
