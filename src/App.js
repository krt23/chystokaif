import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import "popper.js"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CleaningPage from "./components/pages/CleaningPage/CleaningPage";
import WindowCleaningPage from "./components/pages/WindowCleaningPage/WindowCleaningPage";
import DryCleaningPage from "./components/pages/DryCleaningPage/DryCleaningPage";
import ScrollToTop from "./components/_helpers/ScrollToTop";

import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

function App() {
    return (
        <Router>
            <Header/>
            <div className="app">
                <ScrollToTop />
                <Switch>
                    <Redirect exact from="/" to="/chystokaif_public/" component={Home} />
                    <Route exact path="/chystokaif_public/" component={Home}/>
                    <Route exact path="/cleaning" component={CleaningPage}/>
                    <Route exact path="/window-cleaning" component={WindowCleaningPage}/>
                    <Route path="/dry-cleaning" component={DryCleaningPage}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
