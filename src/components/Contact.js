import React, { Fragment, useState } from "react";
import Map from "./Map";

function Contact() {
    const [formData, setformData] = useState({ name: "", email: "", msg: "" });

    const { name, email, msg } = formData;

    const onChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <Fragment>
            <div className="contact">
                <div className="d-flex flex-column justify-content-start ">
                    <div className="row no-gutters ">
                        <div className="col-lg-4">
                            <h5>Adresa</h5>
                            <p>
                                7. muslimanske brigade <br />
                                72240 Kakanj <br />
                                Bosna i Hercegovina
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h5>Kontakt telefoni</h5>
                            <p>
                                +387 61 000 000 (Elvedin ef. Ibrahimspahić){" "}
                                <br />
                                +387 61 000 000 (Adil Čeliković) <br />
                            </p>
                            <h5>Email</h5>
                            <p>dzemat.carsija@gmail.com</p>
                        </div>
                    </div>
                    <div className="row no-gutters contact-form d-flex flex-column ">
                        <form action="" className="d-flex flex-column form">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                required
                                onChange={(e) => onChange(e)}
                                placeholder="Ime i prezime"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                required
                                onChange={(e) => onChange(e)}
                                placeholder="Email"
                            />
                            <textarea
                                name="msg"
                                id="msg"
                                rows="10"
                                value={msg}
                                placeholder="Poruka"
                                required
                                onChange={(e) => onChange(e)}
                            ></textarea>
                            <button className="send-btn">Pošalji</button>
                        </form>
                    </div>
                </div>
                <div className="map-container">
                    <Map />
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
