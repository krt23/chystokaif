import React from "react";
import "./style.scss";
import {prices} from "./CleaningMock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PricesCleaning = () => (
    <React.Fragment>
        <div className="row icons">
            <div className="col-6"></div>
            <div className="col-2"><FontAwesomeIcon icon="door-open"/> м²</div>
            <div className="col-2 icon-time"><FontAwesomeIcon icon={['far', 'clock']}/> год</div>
            <div className="col-2"></div>
        </div>
        <div className="row prices">
            <div className="col-6">
                <div className="apartment">
                    {Object.keys(prices.cleaning).map(
                        (objectKey, index) => (
                            <p key={index}> {prices.cleaning[objectKey].name}</p>
                        ))
                    }
                </div>
            </div>
            <div className="col-2 medium-weight">
                {Object.keys(prices.cleaning).map(
                    (objectKey, index) => (
                        <p key={index}> {prices.cleaning[objectKey].square}</p>
                    ))
                }
            </div>
            <div className="col-2 medium-weight">
                {Object.keys(prices.cleaning).map(
                    (objectKey, index) => (
                        <p key={index}> {prices.cleaning[objectKey].time}</p>
                    ))
                }
            </div>
            <div className="col-2 uah">
                {Object.keys(prices.cleaning).map(
                    (objectKey, index) => (
                        <p key={index}><b> {prices.cleaning[objectKey].price}</b></p>
                    ))
                }
            </div>
        </div>
    </React.Fragment>
);

export default PricesCleaning;
