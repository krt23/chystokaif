import React from "react";
import "./style.scss";
import dishWashing from "../../../assets/img/dish_washing.png";
import rake from "../../../assets/img/rake.png";
import steamIron from "../../../assets/img/steam_iron.png";
import vacuumCleaner from "../../../assets/img/vacuum_cleaner.png";

export default function Adventages() {
    return (
        <section className="adventages">
            <div className="container adventages-content">
                <div className="row">
                    <div className="col-lg-3 adventages-item">
                        <img src={rake} alt="rake"/>
                        <span>Безпечний клінінг для людей та тварин (pet friendly)</span>
                    </div>
                    <div className="col-lg-3 adventages-item">
                        <img src={vacuumCleaner} alt="vacuumCleaner"/>
                        <span>Професійна техніка</span>
                    </div>
                    <div className="col-lg-3 adventages-item">
                        <img src={dishWashing} alt="dishWashing"/>
                        <span>Сертифіковані мийні засоби</span>
                    </div>
                    <div className="col-lg-3 adventages-item">
                        <img src={steamIron} alt="steamIron"/>
                        <span>Дезінфекція за допомогою парогенератора</span>
                    </div>
                </div>
            </div>
        </section>
);
}
