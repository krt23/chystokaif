import React from "react";
import "./style.scss";
import logo from "../../assets/img/header_logo.png";
import Menu from "./Menu";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top header">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="header__img" src={logo} alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
                        <Menu/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
