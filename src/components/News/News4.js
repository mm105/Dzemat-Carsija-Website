import React, { Fragment, useState, useEffect } from "react";

function News4() {
    const [images, setImages] = useState();
    useEffect(() => {
        setImages([
            require("../../images/vijest4/img1.jpg").default,
            require("../../images/vijest4/img2.jpg").default,
            require("../../images/vijest4/img4.jpg").default,
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
                            <h1>Počela mektebska 2020/2021. godina</h1>
                            <p>
                                U subotu, 12.09.2020. godine počela je nova
                                mektebska godina. Za razliku od posljednja tri
                                mjeseca prošle mektebske godine i nastave koja
                                se odvijala na daljinu odnosno na online način,
                                ova mektebska godina krenula je na live način,
                                odnosno uz prisustvo polaznika mektebske nastave
                                u mektebima.
                            </p>
                            <p>
                                S obzirom da je opasnost od koronavirusa još
                                prisutna potrebno je pridržavati se svih mjera
                                zaštite koju propisuju državni i vjerski
                                nadređeni organi. U tom smislu u svim mektebima
                                IZ-e u Bosni i Hercegovini poduzete su značajne
                                mjere kako bi se zaštitili kako polaznici tako i
                                muallimi ali i roditelji.
                            </p>
                            <p>
                                U mektebu Čaršijske džamije u Kaknju, koji broji
                                preko 500 polaznika, poseban je izazov
                                organizovati nastavu prema svim instrukcijama
                                zaštite.
                            </p>
                            <p>
                                U tom smislu muallimi ovog mekteba su pored
                                instistiranja na upotrebi maski na nastavi,
                                obavezne dezinfekcije obuće i ruku, mjerenja
                                temperature za što su zaduženi stariji učenici,
                                nastavu sa pojedinim grupama organizovali u
                                prostoru Čaršijske džamije kako bi bila
                                ispoštovana i potrebna distanca.
                            </p>
                            <p>
                                Svi su saglasni da je održavanje nastave uživo
                                nezamjenjivo a da online način izvođenja nastave
                                može biti samo dodatna dopuna i pomoć. Tako će
                                svaki čas koji se održi u mektebu biti
                                prezentovan i na online platformama kako bi
                                učenici rizičnih grupa bili u toku i mogli
                                pratiti mektebsku nastavu makar na ovaj način.
                            </p>
                            <p>
                                Poželimo svim polaznicima mekteba puno uspjeha u
                                ovoj mektebskoj godini uz nadu da će opasnost od
                                koronavirusa što prije proći kako bi se i
                                nastava u mektebima ali i školama normalizovala.
                            </p>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default News4;
