import React, {Component} from "react";
import isEmpty from "validator/es/lib/isEmpty";
import UserService from "../../services/UserService";

export default class AddGrants extends Component {
    state = {
        grantData: {
            userEmail: "",
            grantSum: "",
        },
        successful: false,
        message: ""
    };

    onChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            grantData: {
                ...this.state.grantData,
                [name]: value
            }
        });
    }

    handleAdd = async (event) => {
        event.preventDefault();


        if (isEmpty(this.state.grantData.userEmail) || isEmpty(this.state.grantData.grantSum)) {
            const resMessage = "Заполните поля";
            this.setState({
                message: resMessage,
                successful: false
            });
            return;
        }

        UserService.addGrant(this.state.grantData).then(response => {
            this.setState({
                grantData: {
                    userEmail: "",
                    grantSum: "",
                },
                message: response.data.message,
                successful: true
            });

            setTimeout(()=>{
                this.props.setActive(false);
                window.location.reload()
                }, 2000)
        }).catch((error) => {
            const resMessage = error.response?.data?.message || error.message;
            this.setState({
                successful: false,
                message: resMessage
            });
        });
    }

    render() {

        return (
            <div className="my-form">
                <form>
                    {!this.state.successful && (
                    <div>
                        <input type="text" name="userEmail" placeholder='E-mail студента' autoComplete="off"
                               className="my-input" value={this.state.grantData.userEmail}
                               onChange={this.onChangeInput}/>

                        <input type="text" name="grantSum" placeholder='Сумма стипендии' autoComplete="off"
                               className="my-input" value={this.state.grantData.grantSum}
                               onChange={this.onChangeInput}/>

                        <button className="my-button"  onClick={this.handleAdd}>Начислить</button>
                    </div>
                    )}
                    {this.state.message && (
                        <div className="message">{this.state.message}</div>
                    )}
                </form>
            </div>
        );
    }
}
