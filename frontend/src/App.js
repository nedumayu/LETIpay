import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/nav/navbar"

class App extends React.Component {
    render() {
        return (
            <div className="my-wrapper">

                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
