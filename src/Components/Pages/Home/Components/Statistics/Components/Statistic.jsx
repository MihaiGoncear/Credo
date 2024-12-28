import React from "react";
import { TRANSLATES } from "utils/translates";

function Statistic({ info, currLanguage }) {
    const { title, number, image } = info;
    return (
        <div className='home__statistics--item ui__cols ui__display-center'>
            <img
                className='image'
                src={image}
                alt={title}
            />
            <div className='number'>{number}</div>
            <div className='title'>{TRANSLATES[title][currLanguage]}</div>
        </div>
    );
}

export default Statistic;
