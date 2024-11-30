import React from "react";

function MottoBanner() {
    return (
        <div
            className='banner banner__motto ui__background-image-center '
            style={{ backgroundImage: "url(./images/banners/motto-banner.jpg)" }}
        >
            <div className='banner__motto--motto general-wrapper'>
                <div className='motto ui__ff--noto '>
                    <span>Credo</span> — Drumurile viitorului, construite azi
                </div>
            </div>
        </div>
    );
}

export default MottoBanner;
