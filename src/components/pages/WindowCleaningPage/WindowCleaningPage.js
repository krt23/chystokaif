import React from "react";
import "./style.scss";
import {prices, windowCleaning, advantages} from "./WindowCleaningMock";
import Prices from "./Prices";

export default function WindowCleaningPage() {
    return (
        <section className="windowCleaning">
            <div className="container">
                <div className="row windowCleaning-content">
                    <div className="col-lg-6 windowCleaning-caption">
                        <h3>Миття вікон</h3>
                    </div>
                    <div className="col-lg-6 windowCleaning-subcaption">
                        <p>У кожне з прибирань ви можете додати такий додатковий сервіс, як миття вікон.</p>
                    </div>
                </div>
                <div className="row windowCleaning-content">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="windowCleaning-container">
                                <Prices/>
                            </div>
                        </div>
                        <div className="row">
                            <h4>У цю послугу також входить:</h4>
                        </div>
                        <div className="row">
                            <ul>
                                {windowCleaning.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-6 windowCleaning-footer">
                        <p>Ми миємо вікна зовні та зсередини за допомогою пароочисника Karcher.</p>
                        <h4><b>Переваги:</b></h4>
                        <ul className="uppercase square-list">
                            {advantages.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <p>Рекомендуємо перед приїздом клінерів, звільнити підвіконня від зайвих речей.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
