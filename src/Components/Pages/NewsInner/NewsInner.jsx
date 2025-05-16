import React from "react";
import { useParams } from "react-router-dom";
import { NEWS } from "utils/constants";
import "./NewsInner.sass";

function NewsInner() {
    const { slug } = useParams();
    const newsItem = NEWS.find((item) => item.alias === slug);

    return (
        <div className='news-inner general-wrapper'>
            <img
                src={newsItem.image}
                alt='news'
                className='news-inner__image'
            />
            <div className='news-inner__title'>{newsItem.title}</div>
            <div className='news-inner__date'>{newsItem.date}</div>
            <div className='news-inner__content'>{newsItem.content}</div>
        </div>
    );
}

export default NewsInner;
