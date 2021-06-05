import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NewsHigh() {
    return (
        <Fragment>
            <div className="news-high p-3">
                <div className="row no-gutters">
                    <div className="col-lg-8 news1-wrap p-2">
                        <div className="shadow">
                            <Link to="/vijesti/1">
                                <div className="news1 d-flex align-items-end">
                                    <h3 className="news-heading">
                                        Džuma namaz u dva termina
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="row no-gutters">
                            <div className="col-lg-12 news2-wrap shadow">
                                <Link to="/vijesti/2">
                                    <div className="news2 d-flex align-items-end">
                                        <h4 className="news-heading">
                                            Šejma Mehić <br /> posjetila džemat
                                            Čaršiju
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row no-gutters ">
                            <div className="col-lg-12 news3-wrap shadow">
                                <Link to="/vijesti/3">
                                    <div className="news3 d-flex align-items-end">
                                        <h4 className="news-heading">
                                            Svečani prijem novih magistara
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
