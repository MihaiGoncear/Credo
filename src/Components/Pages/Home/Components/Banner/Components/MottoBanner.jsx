import React from "react";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function MottoBanner() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <div
            className='banner banner__motto ui__background-image-center '
            style={{ backgroundImage: "url(/images/banners/motto-banner.jpg)" }}
        >
            <div className='banner__motto--motto general-wrapper'>
                <div className='motto ui__ff--noto '>
                    <span>Credo</span> — {TRANSLATES.bannerMotto[currLanguage]}
                </div>
            </div>
        </div>
    );
}

export default MottoBanner;
