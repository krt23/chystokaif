import React from "react";
import "./style.scss";
import {cleaning, greatCleaning} from "./CleaningMock";
import PricesCleaning from "./PricesCleaning";
import PricesGreatCleaning from "./PricesGreatCleaning"

export default function CleaningPage() {
    return (
        <section className="cleaning">
            <div className="container">
                <div className="row cleaning-row">
                    <div className="col-lg-12 cleaning-caption main">
                        <h3>Чисто в кайф</h3>
                    </div>
                </div>
                <p className="whatWeDo"><b>Що ми робимо?</b></p>
                <div className="row cleaning-content">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>У всій квартирі:</h4>
                                <ul>
                                    {cleaning.apartment.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h4>У ванній кімнаті та туалеті:</h4>
                                <ul>
                                    {cleaning.bathroom.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>На кухні:</h4>
                                <ul>
                                    {cleaning.kitchen.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h4>А також:</h4>
                                <ul>
                                    {cleaning.other.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cleaning-container">
                            <PricesCleaning/>
                        </div>
                        <div className="cleaning-content">
                            <h4>Від чого залежить вартість прибирання:</h4>
                            <ul style={{listStyleType: "square"}}>
                                <li>площа</li>
                                <li>ступінь забруднення</li>
                                <li>замовлення додаткових послуг</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row cleaning-row">
                    <div className="col-lg-12 cleaning-caption secondary">
                        <h3>Чистокайф ²</h3>
                    </div>
                </div>
                <p className="whatWeDo"><b>Що ми робимо?</b> Велике прибирання</p>
                <div className="row cleaning-content">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>У всій квартирі:</h4>
                                <ul>
                                    {greatCleaning.apartment.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h4>На кухні:</h4>
                                <ul>
                                    {greatCleaning.kitchen.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>У ванній кімнаті та туалеті:</h4>
                                <ul>
                                    {greatCleaning.bathroom.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bigCleaning-container">
                            <PricesGreatCleaning/>
                        </div>
                        <div className="cleaning-content">
                            <h4>Від чого залежить вартість прибирання:</h4>
                            <ul style={{listStyleType: "square"}}>
                                <li>площа</li>
                                <li>ступінь забруднення</li>
                                <li>замовлення додаткових послуг</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
