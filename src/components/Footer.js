import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Fragment>
            <div className="footer ">
                <div className="row no-gutters justify-content-start">
                    <div className="col-md-4">
                        <h4>Džemat Čaršija Kakanj</h4>
                        <ul>
                            <li>
                                <Link to="/vijesti">Vijesti</Link>
                            </li>
                            <li>
                                <Link rel="noreferrer" to="/o-dzematu">
                                    Historijat
                                </Link>
                            </li>

                            <li>
                                <Link to="/kontakt">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Linkovi</h4>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.islamskazajednica.ba/"
                                >
                                    Islamska zajednica BiH
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://preporod.com/"
                                >
                                    Preporod
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.bir.ba/"
                                >
                                    Radio Bir
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.zekat.ba/"
                                >
                                    Zekat.ba
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-3 social-footer">
                        <a
                            href="https://www.facebook.com/dzemat.carsija/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            <i className="fab fa-facebook-square"></i>
                        </a>

                        <a
                            href="https://www.youtube.com/channel/UCjJugODuXBylUUrjwCL9DYg/featured"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;
