import React, {Component} from "react";
import UserService from "../../services/UserService";
import StorageService from "../../services/StorageService";
import "./profile.css"
import profileIcon from "../../assets/profile-icon-1.png"
import plasticCard from "../../assets/plastic-card.png"


export default class Profile extends Component {
    state = {
        userReady: false,
        currentUser: {username: ""},
        userData: null
    }

    componentDidMount() {
        const currentUser = StorageService.getUser();
        UserService.getUserProfile(currentUser.id).then(
            response => { const userData = response.data;
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
                                <p><b>Группа</b> №{userData.groupNumber}</p>
                                <p><b>E-mail:</b> {userData.email}</p>
                                <p><b>Телефон:</b> {userData.telephone}</p>
                            </div>
                        </div>
                            <div className="cards">
                                <button className="my-button">Добавить карту</button>
                                <div className="my-card">
                                    <div className="card-img"><img className="card-icon" src={plasticCard} alt="Card icon"/></div>
                                    <div className="card-info">
                                        <h6 className="card-name">MasterCard Mass</h6>
                                        <p className="card-number">**** 9037</p>
                                    </div>
                                    <div><p className="card-cost">1000 Р</p></div>
                                </div>
                            </div>
                    </div> : null}
            </div>
        );
    }
}
