import React from "react";
import "./style.scss";
import ViewPricesButton from "../../buttons/ViewPricesButton/ViewPricesButton";

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
            <div className="row">
                <div className="col-12 col-xl-3">
                    <h2 className="text-center">Послуги</h2>
                    <p className="pb-3">Прибирання від #ЧИСТОКАЙФ -</p>
                    <ul>
                        <li>це швидко</li>
                        <li>якісно</li>
                        <li>професійно</li>
                        <li>безпечно</li>
                        <li>вигідн</li>
                    </ul>
                    <p>Допомагаємо із чистотою вашої оселі. Надаємо послугу комерційного прибирання.</p>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="services-dryCleaning">
                        <div className="prices">
                            <div className="prices-header">Хімчистка</div>
                            <div className="prices-button">
                                <ViewPricesButton
                                route="/dry-cleaning"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="services-cleaning">
                        <div className="prices">
                            <div className="prices-header">Клінінг</div>
                            <div className="prices-button">
                                <ViewPricesButton route="/cleaning"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="services-windowCleaning">
                        <div className="prices">
                            <div className="prices-header">Миття вікон</div>
                            <div className="prices-button"> <ViewPricesButton route="/window-cleaning"/> </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    );
}
