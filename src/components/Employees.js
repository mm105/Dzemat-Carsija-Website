import React, { Fragment, useState } from "react";

function Employees() {
    const [showBio, setshowBio] = useState(false);

    const toggleBio = () => {
        setshowBio(!showBio);
    };

    return (
        <Fragment>
            <div className="employees" id="dzemat">
                <h1 className="heading">Imami, mualime i džematski odbor</h1>
                <p>
                    Sadašnji imam džemata je mr. Elvedin ef. Ibrahimspahić, a
                    zbog brojnosti djece, pri džematu rade i muallime Amra
                    Hrusto i Saliha Kovač, koje uče djecu od prvog do četvrtog
                    razreda.
                </p>
                <p>
                    Raniji imami džemata bili su: mr. Sulejman ef. Čeliković,
                    Davud ef. Husika, Meho ef. Šljivo, Ahmed ef. Purdić i Kasim
                    ef. Kadić.
                </p>
                <p>
                    Trenutni odbor Džemata čine: Adil Čeliković (predsjednik),
                    Maid Hadrović (blagajnik), Nusret Đakovac, Abdulah Šljivo,
                    Husein Kadrić (muezin).
                </p>

                <div className="bio">
                    <h6 onClick={toggleBio}>
                        mr. Elvedin ef. Ibrahimspahić - Biografija
                    </h6>
                    {showBio ? (
                        <Fragment>
                            <p>
                                Osnovnu školu završio je u Kaknju, a medresu
                                „Osman ef. Redžović“ u Velikom Čajnu kod
                                Visokog. Poslije medrese završio Islamsku
                                pedagošku akademiju u Zenici, nakon čega upisuje
                                i završava Fakultet islamskih nauka u Sarajevu,
                                u julu 2007. godine.
                            </p>
                            <p>
                                U toku rata, kratkotrajno, bio pripadnik 303. i
                                330. zeničke brigade i to tokom nekoliko mjeseci
                                1995. godine.
                            </p>
                            <p>
                                U periodu od 1996. do 2008. bio imam, hatib i
                                muallim u džematu Putiš, MIZ Busovača, a od
                                2008. do danas radi kao imam, hatib i muallim u
                                džematu Čaršijske džamije u Kaknju.
                            </p>
                            <p>
                                U svom radu akcenat je dao na rad sa djecom i
                                omladinom. Rezultat toga je da je desetak puta
                                bio proglašen za muallima godine kako u MIZ-u
                                Busovača tako i u MIZ-u Kakanj. Do sad je preko
                                40 njegovih učenika upisalo neku od BH medresa.
                            </p>
                            <p>
                                Redovno objavljuje članke i naučne radove u IIN
                                Preporod, web stranici Islamske zajednice u BiH
                                kao i Muftijstva sarajevskog. Također je
                                saradnik Kakanjskih novina, učesnik mnogih
                                televizijskih emisija na TV 5, NTV IC Kakanj te
                                NTV Igman kao i na radio BIR i radio Kakanj.
                                Izdavačka kuća El-Kalem je, 2018. godine,
                                objavila njegovu knjigu „Dženaza i običaji“,
                                koja je nastala kao nastavak istraživanja na
                                osnovu njegovog diplomskog rada na FIN-u.
                                Oženjen od 1995. godine i otac četvero djece.
                            </p>
                        </Fragment>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default Employees;
