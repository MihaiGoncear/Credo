import React from "react";
import "./Home.sass";
import Banner from "./Components/Banner/Banner";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='general-wrapper'>
                <h1>Content</h1>
            </div>
        </div>
    );
}

export default Home;
