import React from "react";
import { Link }from "react-router-dom";
import "./style.scss";

export default function ViewPricesButton({route}) {
    return (
        <React.Fragment>
            <Link to={route} onClick={window.scrollTo(0, 0)}>
                <button className="btn btn-price">
                    Переглянути прайс
                </button>
            </Link>
        </React.Fragment>
    );
}
