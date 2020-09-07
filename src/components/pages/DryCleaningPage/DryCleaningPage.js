import React from "react";
import "./style.scss";
import {stages, pollution, prices} from "../DryCleaningPage/DryCleaningMock";
import Prices from "./Prices";

export default function DryCleaningPage() {
    return (
        <section className="dryCleaning">
            <div className="container">
                <div className="row dryCleaning-content">
                    <div className="col-lg-6 dryCleaning-caption">
                        <h3>Професійна хімчистка на виїзд</h3>
                    </div>
                    <div className="col-lg-6 dryCleaning-subcaption">
                        <p>м'яких та шкіряних меблів, диванів, стільців, крісел, матраців, килимів.</p>
                    </div>
                </div>
                <div className="row dryCleaning-content">
                    <div className="col-md-6">
                        <h4>Етапи здійснення хімчистки:</h4>
                        <ul>
                            {stages.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4>Забруднення, яких ми допоможемо вам позбутись:</h4>
                        <ul>
                            {pollution.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row dryCleaning-content">
                    <div className="col-12 col-xl-4">
                        <div className="dryCleaning-container">
                            <div className="prices-container">
                                <div className="prices-caption">
                                    {prices.captions[0]}:
                                </div>
                                <Prices data={prices.sofa}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="dryCleaning-container">
                            <div className="prices-container">
                                <div className="prices-caption">
                                    {prices.captions[1]}:
                                </div>
                                <Prices data={prices.chair}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="dryCleaning-container">
                            <div className="prices-container">
                                <div className="prices-caption">
                                    {prices.captions[2]}:
                                </div>
                                <Prices data={prices.mattress}/>
                                <div className="other">Додатково: м’яке узголів’я ліжка, бокові частини <span>+100 грн</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 carpet">
                        <div className="col-sm-8 col-md-9">{prices.carpet.name}</div>
                        <div className="col-sm-4 col-md-3 text-right carpet-price">{prices.carpet.price}</div>
                    </div>
                </div>

            </div>

        </section>
    );
}
