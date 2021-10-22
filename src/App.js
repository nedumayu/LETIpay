import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
