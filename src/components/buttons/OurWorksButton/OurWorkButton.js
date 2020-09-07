import React from "react";
import {Scroll} from "../../_helpers/Scroll";
import "./style.scss";

export default function OurWorksButton() {
    return (
        <React.Fragment>
            <button target-id="our-works" className="btn btn-works" onClick={e => Scroll(e)}>Наші роботи</button>
        </React.Fragment>
    );
}


