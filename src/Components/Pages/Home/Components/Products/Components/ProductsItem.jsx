import React from "react";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function ProductsItem({ news }) {
    const { title, image, content } = news;
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <div className='home__news--item'>
            <div
                className='image ui__background-image-center'
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* <div className='date'>— {date}</div> */}
            <div className='title ui__ff--noto '>{TRANSLATES[title][currLanguage]}</div>
            <div className='content ui__ff--noto  '>{TRANSLATES[content][currLanguage]}</div>
        </div>
    );
}

export default ProductsItem;
