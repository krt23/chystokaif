import React, { useState } from "react";
import "./style.scss";

export default function OrderServiceButton(props) {
    return (
        <React.Fragment>
            <button className="btn btn-order" onClick={props.click}>
                Замовити послугу
            </button>
        </React.Fragment>
    );
}
