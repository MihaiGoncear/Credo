import React from "react";
import "./Home.sass";
import Banner from "./Components/Banner/Banner";
import News from "./Components/News/News";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='general-wrapper'>
                <News />
            </div>
        </div>
    );
}

export default Home;
