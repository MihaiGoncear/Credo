import React from "react";
import { NEWS } from "utils/constants";
import NewsItem from "./Components/NewsItem";
import { Link } from "react-router-dom";

function News() {
    return (
        <div className='home__news'>
            <div className='home__news--title ui__title ui__display-justify-between ui__display-align-center'>
                Ultimile Noutăți
                <Link to={"/news"}>Vezi pe toate →</Link>
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
