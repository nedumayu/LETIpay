import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/nav/navbar"
import Footer from "./components/nav/footer"

class App extends React.Component {
    render() {
        return (
            <div className="my-wrapper">

                <BrowserRouter>
                    <Navbar/>
                    <div className="my-content"><AppRouter/></div>

                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
