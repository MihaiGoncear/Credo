import React from "react";
import "./Home.sass";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import News from "./Components/News/News";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='general-wrapper'>
                <Products />
                <div className='home__aboutus'>
                    <p>
                        Dots este un energizant (de tip snus) de nouă generație – fără nicotină,
                        tutun sau zahăr în exces – creat pentru cei care trăiesc intens și nu vor să
                        încetinească. Sub forma unui pliculeț (pouch) cu cafeină, Dots oferă focus
                        și energie instant, oriunde ai nevoie: la birou, în sală sau în mijlocul
                        acțiunii. Misiunea noastră este să oferim o alternativă curată și eficientă
                        la energizantele clasice, iar viziunea noastră e clară – să redefinim modul
                        în care lumea consumă energie. Cu valori precum inovația, calitatea,
                        sustenabilitatea și comunitatea, Dots nu e doar un energizant, e upgrade-ul
                        tău zilnic.
                    </p>
                </div>
                <News />
            </div>
        </div>
    );
}

export default Home;
