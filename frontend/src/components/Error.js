import React from 'react';
import ErrorAnimation from "./animations/ErrorAnimation";

class Error extends React.Component {
    render() {
        return (
            <div className="home-page" style={{marginTop: "0"}}>
                <div>
                    <h1 style={{fontWeight: "600", fontSize: "50px", marginRight: "10px", color: "#347CE1"}} >Упс... страница недоступна</h1>
                </div>
                <div style={{width: "600px"}}>
                    <ErrorAnimation/>
                </div>
            </div>
        );
    }
}

export default Error;