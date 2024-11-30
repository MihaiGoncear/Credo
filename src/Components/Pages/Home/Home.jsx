import React from "react";
import "./Home.sass";
import Banner from "./Components/Banner/Banner";
import News from "./Components/News/News";
import Statistics from "./Components/Statistics/Statistics";
import Partners from "./Components/Partners/Partners";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='general-wrapper'>
                <News />
                <Statistics />
                <Partners />
            </div>
        </div>
    );
}

export default Home;
