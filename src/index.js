import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import "./styles/index.css";

// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <DefaultLayout />
    </Router>,
    document.getElementById("root")
);
// registerServiceWorker();
