import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function History() {
    return (
        <Fragment>
            <div className="history">
                <h1 className="heading">O džematu</h1>
                <p>
                    Džemat Čaršija smješten je u gradskoj jezgri Kaknja, kome
                    pripada naselje Plandište i Novo Naselje Bare. Osnovan je u
                    toku agresije na BiH, a džamija je izgrađena i proklanjana
                    uoči ramazana 2004. godine, s tim da još nije bilo zvanično
                    otvorenje. Džemat ima oko 1000 redovnih članova. U džematu
                    djeluje pokopno društvo. U džamiji se klanja svih pet vakata
                    namaza, džuma, bajrami i uče djeca.
                </p>
                <p>
                    Kamen temeljac za Čaršijsku džamiju u Kaknju položen je 24.
                    novembra 1991. godine. Kamen je, praćen učenjem hora “El
                    Hidaje”, položio tadašnji reisu-l-ulema hadži Jakub ef.
                    Selimovski. Početak svečanosti koja je toga dana upriličena
                    označio je glas Hidajeta ef. Talića koji je učio Kur'an.
                </p>
                <p>
                    Impozantnom skupu obratio se Ibrahim ef. Hadžić,
                    vjersko-prosvjetni referent IZ Kakanj, a potom je govorio i
                    Sulejman ef. Čeliković, glavni imam Medžlisa IZ Kakanj i
                    predsjednik Građevinskog odbora. “Prvu ideju o potrebi
                    vjerskog objekta na užem području grada inicirao je hafiz
                    Zahid ef. Mušanović davne 1935. godine, a od tada se bilježe
                    još dva pokušaja koja nisu urodila plodom”, rekao je tada
                    Sulejman ef. Čeliković. Postojale su tri opcije za lokaciju
                    prve gradske, čaršijske džamije u Kaknju. Nakon protivljenja
                    i osporavanja od određenih struktura na kraju je dobijena
                    najelitnija lokacija u strogom centru grada. Projekat
                    izgradnje islamskog centra i džamije izradio je prof.dr.
                    Hamdija Salihović iz Sarajeva.
                </p>
                <p>
                    Ubrzo je došla ratna 1992. godina kada su radovi
                    zaustavljeni. Nakon završetka Odbrambeno-oslobodilačkog
                    rata, radovi na izgradnji gradske džamije započeli su 9.
                    augusta 1996. godine a završeni 2004 godine.
                </p>
                <Link to="/o-dzematu" className="see-more">
                    Vidi galeriju
                </Link>
            </div>
        </Fragment>
    );
}
