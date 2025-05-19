import React from "react";
import { useParams } from "react-router-dom";
import { NEWS } from "utils/constants";
import "./NewsInner.sass";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function NewsInner() {
    const { slug } = useParams();
    const newsItem = NEWS.find((item) => item.alias === slug);

    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    return (
        <div className='news-inner general-wrapper'>
            <img
                src={newsItem.image}
                alt='news'
                className='news-inner__image'
            />
            <div className='news-inner__title'>{TRANSLATES[newsItem.title][currLanguage]}</div>
            <div className='news-inner__date'>{newsItem.date}</div>
            <div
                className='news-inner__content'
                dangerouslySetInnerHTML={{ __html: TRANSLATES[newsItem.content][currLanguage] }}
            />
        </div>
    );
}

export default NewsInner;
