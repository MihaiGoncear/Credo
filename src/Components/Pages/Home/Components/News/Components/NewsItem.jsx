import React from "react";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function NewsItem({ news }) {
    const { title, alias, image, date } = news;
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    console.log(TRANSLATES[title]);

    return (
        <a
            href={`news/${alias}`}
            className='home__news--item'
        >
            <div
                className='image ui__background-image-center'
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className='date'>— {date}</div>
            <div className='title ui__ff--noto ui__3-line-title '>
                {TRANSLATES[title][currLanguage]}
            </div>
        </a>
    );
}

export default NewsItem;
