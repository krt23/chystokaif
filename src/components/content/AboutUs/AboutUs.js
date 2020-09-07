import React from "react";
import "./style.scss";
import team from "../../../assets/img/rake.png";

export default function AboutUs() {
    return (
        <section className="aboutUs" id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 aboutUs-content">
                        <h2>Наша команда</h2>
                        <p style={{textTransform: "uppercase"}}>Ми молода, амбіційна команда клінерів, які знають просту істину, коли чисто - це кайф.
                            Руйнуємо стереотипи про прибирання. </p>
                        <p>Velit, nisl eu tempor euismod consectetur fames bibendum. Sapien sapien congue magna magna
                            amet tempor, viverra adipiscing egestas. Diam tortor, vitae, felis, sit tristique at
                            pulvinar ipsum iaculis. Eget cursus a orci elementum maecenas. Sed ultrices faucibus eget
                            pharetra amet. Varius metus a, diam nec praesent pretium, sem.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="header__img" src={team} alt="team"/>
                    </div>
                </div>
            </div>

        </section>
    );
}
