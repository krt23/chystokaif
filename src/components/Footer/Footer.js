import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="footer" id="contacts">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 icons">
                        <a href="https://www.facebook.com/chysto.kaif.cv"><FontAwesomeIcon icon={['fab', 'facebook-square']}/></a>
                        <a href="https://web.telegram.org/#/im?p=u147356316_5582293503447326355"><FontAwesomeIcon icon={['fab', 'telegram-plane']}/></a>
                        <a href="https://www.instagram.com/chysto.kaif_cv/"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                    </div>

                    <div className="col-sm-6">
                        <div className="menu-contacts">
                            <p className="menu-contacts__phone"><a href="tel:096-707-44-80">096 707 44 80</a></p>
                            <p className="menu-contacts__text">Графік роботи: пн-сб 9.00-21.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
