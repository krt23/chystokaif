import React, {useState} from "react";
import "./style.scss";
import Adventages from "../content/Advantages/Advantages";
import mobileSpecialProposals from "../../assets/img/mobile_special-proposals.png"
import specialProposals from "../../assets/img/special-proposals.png"
import Services from "../content/Services/Services";
import AboutUs from "../content/AboutUs/AboutUs";
import OurWorks from "../content/OurWorks/OurWorks";
import OrderServiceButton from "../buttons/OrderServiceButton/OrderServiceButton";
import OurWorksButton from "../buttons/OurWorksButton/OurWorkButton";
import ModalWindow from "../_helpers/ModalWindow/ModalWindow";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);
    return (
        <div className="main">
            <section className="home" id="home">
                <div className="container">
                    <div className="row home-content">
                        <div className="col-lg-10 home-caption">
                            <h1 className="home-caption__title">професійна хімчистка <br/> та клінінг</h1>
                            <p className="home-caption__subtitle">Працюємо в місті Чернівці. Виїзд по місту -
                                безкоштовний, <br/>
                                за межі - додатково оплачуються витрати на бензин.</p>
                            <div className="button">
                                <OrderServiceButton click={() => setIsOpen(true)}/>
                            </div>
                            <div className="button">
                                <OurWorksButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Adventages/>
            <Services/>

            <div className="container-fluid banner">
                <picture>
                    <source media="(min-width:650px)" srcSet={specialProposals}/>
                    <img className="img-fluid" src={mobileSpecialProposals} alt="specialProposals"/>
                </picture>
            </div>

            <AboutUs/>
            <OurWorks/>
            {isOpen &&  <ModalWindow
                isOpen={() => setIsOpen(false)}
            />}


        </div>
    );
}




