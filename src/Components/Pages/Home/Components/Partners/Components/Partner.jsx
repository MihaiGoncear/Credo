import React from "react";

function Partner({ info }) {
    const { title, image } = info;

    return (
        <div className='home__partners--item ui__display-center'>
            <img
                className='image'
                src={image}
                alt={title}
            />
        </div>
    );
}

export default Partner;
