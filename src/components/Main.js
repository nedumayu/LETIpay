import React from "react";
import UserComponent from "./UserComponent";

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Вы авторизировались!</h1>
                <UserComponent />
            </div>
        );
    }
}

export default Main;