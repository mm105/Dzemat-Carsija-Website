import React, { Fragment } from "react";
import Ads from "./Ads";
import Employees from "./Employees";
import History from "./History";

import NewsHigh from "./NewsHigh";

export default function Landing() {
    return (
        <Fragment>
            <NewsHigh />
            <div className="history-ads" id="historijat">
                <div className="row no-gutters">
                    <div className="col-lg-8">
                        <History />
                    </div>
                    <div className="col-lg-4">
                        <Ads />
                    </div>
                </div>
            </div>
            <div className="employees-wrap">
                <div className="row no-gutters">
                    <div className="col-lg-12">
                        <Employees />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
