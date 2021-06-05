import React, { Fragment } from "react";

import img1 from "../../images/vijest1/img1.jpg";

function News1() {
    return (
        <Fragment>
            <div className="single-news">
                <div className="single-news-img">
                    <img src={img1} alt="" />
                </div>
                <div className="single-news-text">
                    <h1>Džuma namaz u dva termina</h1>
                    <p>
                        Obavještavamo sve vjernike da je Medžlis IZ-e Kakanj
                        donio odluku da će se od narednog petka, 27.11.2020.
                        godine, u Čaršijskoj džamiji u Kaknju klanjati dvije
                        džume i to jedna u 12 sati a druga u 13 sati.
                    </p>
                    <p>
                        Ova odluka je donesena zbog pogoršane epidemiološke
                        situacije u vezi sa corona virusom a u cilju prevencije
                        stvaranja velikih gužvi na džuma namazu i nemogućnosti
                        držanja propisanih mjera zaštite.
                    </p>
                    <p>
                        Pozivamo vjernike, pogotovo starije, da iskoriste ovu
                        priliku i dođu na džuma namaz u terminu od 13 sati jer
                        smatramo da će džamija u terminu od 12 sati i dalje biti
                        puna.
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default News1;
