import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TRANSLATES } from "utils/translates";

function ContactBanner() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    return (
        <Link
            to={"/contacts"}
            className='banner banner__contacts ui__background-image-center '
            style={{ backgroundImage: "url(/images/banners/contacts-banner.jpg)" }}
        >
            <div className='banner__contacts--title'>
                {TRANSLATES.needExpertsBanner[currLanguage]}
                <br />
                {TRANSLATES.needExpertsBanner2[currLanguage]}
            </div>
            <div className='banner__contacts--button'>{TRANSLATES.contactUs[currLanguage]}</div>
        </Link>
    );
}

export default ContactBanner;
