import React from "react";

function ServicesBanner() {
    return (
        <a
            href='/about'
            className='banner banner__services ui__background-image-center '
            style={{ backgroundImage: "url(/images/banners/services-banner.jpg)" }}
        >
            <div className='banner__services--list general-wrapper'>
                <div className='title ui__ff--noto'>Serviciile noastre</div>
                <div className='item'>
                    Dispune de uzina de asfalt „BENINGHOVEN” cu o capacitate de 200 tone/H
                </div>
                <div className='item'>Asfaltarea și reparația drumurilor</div>
                <div className='item'>
                    Deține un depozit cu un volum de 500.000 m3 pentru depozitarea materialelor de
                    construcții.
                </div>
                <div className='button'>Descoperă mai multe</div>
            </div>
        </a>
    );
}

export default ServicesBanner;
