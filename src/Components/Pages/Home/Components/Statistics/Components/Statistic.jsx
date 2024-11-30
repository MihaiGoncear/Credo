import React from "react";

function Statistic({ info }) {
    const { title, number, image } = info;
    return (
        <div className='home__statistics--item ui__cols ui__display-center'>
            <img
                className='image'
                src={image}
                alt={title}
            />
            <div className='number'>{number}</div>
            <div className='title'>{title}</div>
        </div>
    );
}

export default Statistic;
