import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => {
                const ismobile = window.innerWidth < 991;
                if (ismobile !== isMobile) setIsMobile(ismobile);
            },
            false
        );
    }, [isMobile]);
    return (
        <Fragment>
            <nav
                className={` ${
                    isMobile
                        ? "navbar navbar-expand-lg"
                        : "navbar navbar-expand-lg nav-normal"
                }`}
            >
                <Link className="navbar-brand m-2" to="/">
                    <img
                        src={logo}
                        // width="30"
                        // height="70"
                        id="logo"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#collapse_target"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="collapse_target"
                >
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/vijesti" className="nav-link">
                                Vijesti
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/o-dzematu" className="nav-link">
                                O‎‎&nbsp;DŽEMATU
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/#dzemat" className="nav-link">
                                UPOSLENICI
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/kontakt" className="nav-link">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
