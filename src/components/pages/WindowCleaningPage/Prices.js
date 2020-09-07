import React from "react";
import "./style.scss";
import {prices} from "./WindowCleaningMock";

const Prices = () => (
    <div className="prices">
        <p><b>{prices[0].name} - <span>{prices[0].price}</span></b></p>
            {Object.keys(prices).map(
                (objectKey, index) => {
                    if (index >= 1) {
                        return ( <p key={index}> {prices[objectKey].name} - <span>{prices[objectKey].price}</span></p>)
                    }
                }
            )}
    </div>
);

export default Prices;
