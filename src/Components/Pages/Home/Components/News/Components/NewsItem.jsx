import React from "react";

function NewsItem({ news }) {
    const { title, alias, image, date, content } = news;
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
            {/* <div className='content ui__ff--noto ui__3-line-title '>{content}</div> */}
        </a>
    );
}

export default NewsItem;
