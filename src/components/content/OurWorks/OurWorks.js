import React from "react";
import "./style.scss";
import OrderServiceButton from "../../buttons/OrderServiceButton/OrderServiceButton";
import work_1 from "../../../assets/img/rake.png";
import work_2 from "../../../assets/img/steam_iron.png";
import work_3 from "../../../assets/img/vacuum_cleaner.png";

export default function OurWorks() {
    return (
        <section className="ourWorks" id="our-works">
            <div className="container">
                <h2>Результати наших робіт</h2>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={work_1} alt="Los Angeles"/>
                            {/*width="1100" height="500"*/}
                        </div>
                        <div className="carousel-item">
                            <img src={work_2} alt="Chicago"/>
                        </div>
                        <div className="carousel-item">
                            <img src={work_3} alt="New York"/>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                <OrderServiceButton/>
            </div>
        </section>
    );
}
