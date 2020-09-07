import React from "react";
import "./style.scss";

const Prices = ({data}) => (
    <div className="prices">
        <div className="row">
            {Object.keys(data).map(
                (objectKey, index) => (
                    <React.Fragment key={index}>
                        <div className="col-2">
                            <img src={data[objectKey].img}/>
                        </div>
                        <div className="col-6 name">
                            <li>{data[objectKey].name}</li>
                        </div>
                        <div className="col-4 cost">
                            <li>{data[objectKey].price}</li>
                        </div>
                    </React.Fragment>

                )
            )}
        </div>
    </div>
);

export default Prices;
