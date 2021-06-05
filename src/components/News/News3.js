import React, { Fragment, useState, useEffect } from "react";

function News3() {
    const [images, setImages] = useState();
    useEffect(() => {
        setImages([
            require("../../images/vijest3/img1.jpg").default,
            require("../../images/vijest3/img2.jpg").default,
            require("../../images/vijest3/img3.jpg").default,
        ]);
    }, []);

    const [index, setIndex] = useState(0);
    const slideRight = () => {
        setIndex((index + 1) % images.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };
    return (
        <Fragment>
            {images && (
                <Fragment>
                    <div className="single-news">
                        <div className="single-news-img ">
                            <img src={images[index]} alt={index} />
                            <div className="buttons">
                                <button className="left" onClick={slideLeft}>
                                    <i className="fas fa-arrow-alt-circle-left"></i>
                                </button>
                                <button className="right" onClick={slideRight}>
                                    <i className="fas fa-arrow-alt-circle-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="single-news-text">
                            <h1>Svečani prijem novih magistara</h1>
                            <p>
                                U petak, 23.10.2020. godine u prostorijama
                                Medžlisa IZ-e Kakanj upriličen je svečani prijem
                                za dvojicu novih magistara, uposlenika Medžlisa.
                            </p>
                            <p>
                                Mr. Elvedin ef. Ibrahimspahić, imam Čaršijske
                                džamije u Kaknju, magistrirao je na Fakultetu
                                islamskih nauka u Sarajevu iz oblasti Hadisa a
                                njegova magistarska tema bila je: Rješavanje
                                konflikata – poslanički model.
                            </p>
                            <p>
                                Mr. Zakir ef. Ljubović, sekretar Medžlisa,
                                magistrirao je na Ekonomskom fakultetu u Zenici
                                iz oblasti Upravljanje ljudskim resursima a
                                njegova tema je bila: Utjecaj nivoa razvijenosti
                                praksi menadžmenta ljudskih resursa na rezultate
                                nevladinih organizacija u Bosni i Hercegovini.
                            </p>
                            <p>
                                Svečani prijem za nove magistre upriličili su
                                ispred Medžlisa: glavni imam Medžlisa IZ Kakanj,
                                mr. Sulejman ef. Čeliković i predsjednik IO
                                Medžlisa, mr. Nevzet Kovačević te ispred OO
                                ilmijja Kakanj: predsjednik Mustafa ef. Agić i
                                sekretar Nedim ef. Subašić te član Upravnog
                                odbora Asim ef. Hasanspahić.
                            </p>
                            <p>
                                Svečani prijem je protekao u veoma prijatnoj
                                atmosferi na kome su evocirane uspomene na
                                studentske dane prisutnih. Razgovaralo se i o
                                vrijednosti postignutih rezultata novih
                                magistara te mogućnostima prenošenja
                                istraživanja i iskorištavanja u radu zajednice.
                            </p>
                            <p>
                                Na kraju su novim magistrima dodijeljeni i
                                pokloni od Medžlisa i OO ilmijje uz dovu i želju
                                da nastave sa istraživanjem i postizanjem novih
                                uspjeha.
                            </p>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default News3;
