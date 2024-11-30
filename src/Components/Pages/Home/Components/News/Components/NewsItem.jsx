import React from "react";

function NewsItem({ news }) {
    const { title, alias, image, date } = news;
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
            <div className='title ui__ff--noto ui__3-line-title '>{title}</div>
        </a>
    );
}

export default NewsItem;
