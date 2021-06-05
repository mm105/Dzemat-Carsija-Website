import React, { Fragment } from "react";

import preporod from "../images/ads/preporod.png";
import bir from "../images/ads/bir.png";
import izbih from "../images/ads/izbih.png";
import zekat from "../images/ads/zekat.jpg";

export default function Ads() {
    return (
        <Fragment>
            <div className="ads d-flex flex-column align-items-center ">
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/dzemat.carsija"
                    data-width="280"
                    data-hide-cover="false"
                    data-show-facepile="false"
                ></div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.islamskazajednica.ba/"
                >
                    <div className="add-item ">
                        <img src={izbih} alt="" />
                    </div>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://preporod.com/"
                >
                    <div className="add-item ">
                        <img src={preporod} alt="" />
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.bir.ba/">
                    <div className="add-item ">
                        <img src={bir} alt="" />
                    </div>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.zekat.ba/"
                >
                    <div className="add-item ">
                        <img src={zekat} alt="" />
                    </div>
                </a>
            </div>
        </Fragment>
    );
}
