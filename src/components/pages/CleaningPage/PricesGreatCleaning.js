import React from "react";
import "./style.scss";
import {prices} from "./CleaningMock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PricesGreatCleaning = () => (
    <React.Fragment>
        <div className="row icons">
            <div className="col-2 col-xl-2 icon-door"><FontAwesomeIcon icon="door-open"/> м²</div>
            <div className="col-5 col-xl-5"></div>
            <div className="col-2 col-xl-2 icon-time"><FontAwesomeIcon icon={['far', 'clock']}/> год</div>
            <div className="col-1 col-xl-1 "></div>
            <div className="col-2 col-xl-2"></div>
        </div>
        <div className="row prices">
            <div className="col-6 col-md-6 col-xl-6 uppercase">
                <div className="square">
                    {Object.keys(prices.greatCleaning).map(
                        (objectKey, index) => (
                            <p key={index}> {prices.greatCleaning[objectKey].name}</p>
                        ))
                    }
                </div>
            </div>
            <div className="d-none col-xl-1"></div>
            <div className="col-3 col-md-3 col-xl-2 medium-weight">
                {Object.keys(prices.greatCleaning).map(
                    (objectKey, index) => (
                        <p key={index}> {prices.greatCleaning[objectKey].time}</p>
                    ))
                }
            </div>
            <div className="d-none col-xl-1"></div>
            <div className="col-3 col-md-3 col-xl-2 uah">
                {Object.keys(prices.greatCleaning).map(
                    (objectKey, index) => (
                        <p key={index}><b> {prices.greatCleaning[objectKey].price}</b></p>
                    ))
                }
            </div>
            <p>Від ​115 м² ​- за домовленістю.</p>
        </div>
    </React.Fragment>
);

export default PricesGreatCleaning;
