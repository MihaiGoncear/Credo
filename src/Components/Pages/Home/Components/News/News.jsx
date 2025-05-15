import React from "react";
import { NEWS } from "utils/constants";
import NewsItem from "./Components/NewsItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function News() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <div className='home__news'>
            <div className='home__news--title ui__title ui__display-justify-between ui__display-align-center'>
                {/* {TRANSLATES.lastNews[currLanguage]} */}
                Produse
                {/* <Link to={"/news"}>{TRANSLATES.seeAll[currLanguage]} →</Link> */}
            </div>
            <div className='home__news--items ui__display-justify-between ui__rows'>
                {NEWS.map((news, index) => (
                    <NewsItem
                        key={index}
                        news={news}
                    />
                ))}
            </div>
        </div>
    );
}

export default News;
