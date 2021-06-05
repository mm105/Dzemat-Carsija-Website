import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import img1 from "../images/vijest1/img1.jpg";
import img2 from "../images/vijest2/img1.jpg";
import img3 from "../images/vijest3/img1.jpg";
import img4 from "../images/vijest4/img2.jpg";

function News() {
    return (
        <Fragment>
            <div className="news-page">
                <Link to="/vijesti/1">
                    <div className="news-item row no-gutters">
                        <div className="col-md-7 col-lg-5">
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-md-5 col-lg-7">
                            <h4>Džuma namaz u dva termina</h4>
                            <p>
                                Obavještavamo sve vjernike da je Medžlis IZ-e
                                Kakanj donio odluku da će se od narednog petka,
                                27.11.2020. godine, u Čaršijskoj džamiji u
                                Kaknju klanjati dvije džume i to...
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/vijesti/2">
                    {" "}
                    <div className="news-item row no-gutters">
                        <div className="col-md-7 col-lg-5">
                            <img src={img2} alt="" />
                        </div>
                        <div className="col-md-5 col-lg-7">
                            <h4>
                                Šejma Mehić posjetila mekteb čaršijske džamije
                            </h4>
                            <p>
                                U subotu, 24.10.2020. godine mekteb Čaršijske
                                džamije u Kaknju posjetila je Šejma Mehić, veoma
                                poznata po prelijepom učenju ilahija i kasida.
                                Posebnu popularnost Šejma ima kod...
                            </p>
                        </div>
                    </div>{" "}
                </Link>

                <Link to="/vijesti/3">
                    {" "}
                    <div className="news-item row no-gutters">
                        <div className="col-md-7 col-lg-5">
                            <img src={img3} alt="" />
                        </div>
                        <div className="col-md-5 col-lg-7">
                            <h4>Svečani prijem novih magistara</h4>
                            <p>
                                U petak, 23.10.2020. godine u prostorijama
                                Medžlisa IZ-e Kakanj upriličen je svečani prijem
                                za dvojicu novih magistara, uposlenika Medžlisa.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/vijesti/4">
                    {" "}
                    <div className="news-item row no-gutters">
                        <div className="col-md-7 col-lg-5">
                            <img src={img4} alt="" />
                        </div>
                        <div className="col-md-5 col-lg-7">
                            <h4>Počela mektebska 2020/2021. godina</h4>
                            <p>
                                U subotu, 12.09.2020. godine počela je nova
                                mektebska godina. Za razliku od posljednja tri
                                mjeseca prošle mektebske godine i nastave koja
                                se odvijala na...
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    );
}

export default News;
