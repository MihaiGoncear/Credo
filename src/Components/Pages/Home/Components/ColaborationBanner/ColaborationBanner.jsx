import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TRANSLATES } from "utils/translates";

function ColaborationBanner() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <Link
            to={"/contacts"}
            className='home__colaboration'
        >
            <div className='general-wrapper ui__display-align-center ui__display-justify-between'>
                <div className='text ui__ff--noto'>
                    <div className='home__colaboration--title'>
                        {TRANSLATES.letsWorkTogether[currLanguage]}
                    </div>
                    <div className='home__colaboration--subtitle'>
                        <span>{TRANSLATES.contactUs[currLanguage]}</span>{" "}
                        {TRANSLATES.discussIdea[currLanguage]}
                    </div>
                </div>
                <img
                    src='/images/icons/general/collaboration.svg'
                    alt='collaboration'
                    className='image'
                />
            </div>
        </Link>
    );
}

export default ColaborationBanner;
