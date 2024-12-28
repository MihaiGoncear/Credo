import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TRANSLATES } from "utils/translates";

function ServicesBanner() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <Link
            to={"/about"}
            className='banner banner__services ui__background-image-center '
            style={{ backgroundImage: "url(/images/banners/services-banner.jpg)" }}
        >
            <div className='banner__services--list general-wrapper'>
                <div className='title ui__ff--noto'>{TRANSLATES.ourServices[currLanguage]}</div>
                <div className='item'>{TRANSLATES.asphaltFactory[currLanguage]}</div>
                <div className='item'>{TRANSLATES.asphaltReparation[currLanguage]}</div>
                <div className='item'>{TRANSLATES.depositCapacity[currLanguage]}</div>
                <div className='button'>{TRANSLATES.descoverMore[currLanguage]}</div>
            </div>
        </Link>
    );
}

export default ServicesBanner;
