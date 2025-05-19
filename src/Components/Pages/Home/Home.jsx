import React from "react";
import "./Home.sass";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import News from "./Components/News/News";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function Home() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    return (
        <div className='home'>
            <Banner />
            <div className='general-wrapper'>
                <Products />
                <div className='home__aboutus'>
                    <p>{TRANSLATES["index-about-us-info"][currLanguage]}</p>
                </div>
                <News />
            </div>
        </div>
    );
}

export default Home;
