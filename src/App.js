import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
