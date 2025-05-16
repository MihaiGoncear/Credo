import { getBlock } from "api/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./AboutUs.sass";

function AboutUs() {
    const [content, setContent] = useState("");
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    // useEffect(() => {
    //     const getAddressesApi = async () => {
    //         let getAboutUs = await getBlock("about_us");
    //         if (getAboutUs.status === 200) {
    //             setContent(getAboutUs.data[0][`value_${currLanguage}`]);
    //         }
    //     };
    //     getAddressesApi();
    // }, [currLanguage]);

    return (
        <div className='home'>
            <div className='general-wrapper'>
                <div className='home__aboutus'>
                    <p>
                        Totul a pornit de la o nevoie reală:{" "}
                        <strong>cum îți activezi mintea și corpul</strong> fără să bei jumătate de
                        litru de băuturi calorice, fără să cari după tine o sticlă și fără să
                        consumi substanțe care creează dependență?
                    </p>
                    <p>
                        Am creat <strong>DOTS</strong> pentru oamenii care trăiesc în ritmul
                        prezentului – dinamici, ambițioși, conectați. Pentru cei care refuză să
                        încetinească. Pentru cei care au idei de dus până la capăt, antrenamente de
                        încheiat, proiecte de lansat și nopți de transformat în oportunități. Pentru
                        cei care cer performanță, Nu dependență – fără nicotină, tutun și fără exces
                        de zahăr.
                    </p>
                    <p>
                        <strong>DOTS nu e doar un produs. E o alternativă reală</strong> - La
                        energizantele clasice. La obiceiurile lente. La formulele învechite. Este
                        creat pentru cei care vor mai mult – mai mult focus, mai mult control, mai
                        multă libertate de mișcare.
                    </p>
                    <p>
                        <strong>Este o schimbare de ritm.</strong>
                    </p>
                    <p>
                        DOTS e pentru cei care trăiesc intens, gândesc repede și nu acceptă să fie
                        limitați de oboseală. Un energizant de nouă generație – curat, eficient și
                        discret. Inspirat din dinamica lumii moderne, DOTS vine sub forma unui
                        pliculeț (pouch) cu cafeină, tip snus, care acționează rapid și precis – la
                        birou, în sala de forță, în trafic sau în mijlocul acțiunii.
                    </p>
                    <p>
                        <strong>
                            Fără exces de zahăr. Fără nicotină. Fără tutun. Fără compromisuri.
                        </strong>
                    </p>
                    <p>Doar energie. Exact când ai nevoie.</p> <h3>Misiunea “DOTS”</h3>
                    <p>
                        Să oferim o alternativă inovatoare, sănătoasă și eficientă la băuturile
                        energizante, printr-un produs modern, fără nicotină, fără tutun, ușor de
                        utilizat oriunde și oricând.
                    </p>
                    <h3>Viziunea “DOTS”</h3>
                    <p>
                        Să devenim lideri pe piața suplimentelor energizante din Republica Moldova
                        și să extindem brandul la nivel internațional, redefinind modul în care
                        oamenii consumă energie zilnic.
                    </p>
                    <h3>Valorile “DOTS”</h3>
                    <ul>
                        <li>
                            <strong>Inovație</strong> – Redefinim categoria suplimentelor
                            energizante printr-un format modern și eficient;
                        </li>
                        <li>
                            <strong>Calitate</strong> – Folosim ingrediente premium, sigure și
                            eficiente;
                        </li>
                        <li>
                            <strong>Autenticitate</strong> – Construim un brand unic, modern și
                            apropiat de consumatori;
                        </li>
                        <li>
                            <strong>Accesibilitate</strong> – Oferim o soluție energizantă practică,
                            la un preț corect;
                        </li>
                        <li>
                            <strong>Sustenabilitate</strong> – Ne preocupăm de impactul asupra
                            mediului și optimizăm ambalajele;
                        </li>
                        <li>
                            <strong>Comunitate</strong> – Creăm un stil de viață activ, vibrant și
                            conectat;
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
