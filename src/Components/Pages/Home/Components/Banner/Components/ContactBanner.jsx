import React from "react";

function ContactBanner() {
    return (
        <a
            href='/contacts'
            className='banner banner__contacts ui__background-image-center '
            style={{ backgroundImage: "url(./images/banners/contacts-banner.jpg)" }}
        >
            <div className='banner__contacts--title'>
                Ai nevoie de experți în infrastructură rutieră? <br /> Suntem la un click distanță!
            </div>
            <div className='banner__contacts--button'>Contactează-ne</div>
        </a>
    );
}

export default ContactBanner;
