import React from "react";

function ColaborationBanner() {
    return (
        <a
            href='/contacts'
            className='home__colaboration'
        >
            <div className='general-wrapper ui__display-align-center ui__display-justify-between'>
                <div className='text ui__ff--noto'>
                    <div className='home__colaboration--title'>Ce zici să lucrăm împreună?</div>
                    <div className='home__colaboration--subtitle'>
                        <span>Contactează-ne</span> pentru a discuta despre ideia ta.
                    </div>
                </div>
                <img
                    src='./images/icons/collaboration.svg'
                    alt='collaboration'
                    className='image'
                />
            </div>
        </a>
    );
}

export default ColaborationBanner;
