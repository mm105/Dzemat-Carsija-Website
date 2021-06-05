import React, { Fragment, useState, useEffect } from "react";

function News2() {
    const [images, setImages] = useState();
    useEffect(() => {
        setImages([
            require("../../images/vijest2/img1.jpg").default,
            require("../../images/vijest2/img2.jpg").default,
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
                            <h1>
                                Šejma Mehić posjetila mekteb čaršijske džamije
                            </h1>
                            <p>
                                U subotu, 24.10.2020. godine mekteb Čaršijske
                                džamije u Kaknju posjetila je Šejma Mehić, veoma
                                poznata po prelijepom učenju ilahija i kasida.
                                Posebnu popularnost Šejma ima kod najmlađe
                                publike u šta smo se uvjerili kadfa je ušla na
                                vrata mekteba.
                            </p>
                            <p>
                                Djevojčice koje su bile u mektebu bile su
                                presretne što su mogle upoznati Šejmu, čije
                                ilahije često uče na programima i koju smatraju
                                svojim uzorom. Šejma je razgovarala sa svojim
                                fanovima iz mekteba Čaršija, poručila im da
                                vrijedno rade, uče i slušaju svoga muallima. Na
                                kraju je zajedno sa djevojčicama iz mekteba
                                proučila svoju poznatu numeru "Šejma" a onda je
                                uslijedilo i slikanje.
                            </p>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default News2;
