import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Swiper from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";
import { TRANSLATES } from "utils/translates";
import "swiper/css";
import "swiper/css/autoplay";

function ServicesBanner() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <div
            className='banner banner__services ui__background-image-center '
            style={{ backgroundImage: "url(/images/banners/services-banner.jpg)" }}
        >
            {/* <div className='title ui__ff--noto'>{TRANSLATES.ourServices[currLanguage]}</div> */}
            <div className='title ui__ff--roboto'>{TRANSLATES.gabiBanner_fourth[currLanguage]}</div>
            <div className='banner__services--list general-wrapper'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 1500 }}
                    modules={[Autoplay]}
                    speed={1000}
                >
                    <SwiperSlide>
                        <div className='item'>{TRANSLATES.gabiBanner_first[currLanguage]}</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>{TRANSLATES.gabiBanner_second[currLanguage]}</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            {TRANSLATES.gabiBanner_third[currLanguage]} <span>Dots</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* <div className='banner__services--list general-wrapper'> */}
            {/* 
                <div className='item'>{TRANSLATES.asphaltFactory[currLanguage]}</div>
                <div className='item'>{TRANSLATES.asphaltReparation[currLanguage]}</div>
                <div className='item'>{TRANSLATES.depositCapacity[currLanguage]}</div>
                <div className='button'>{TRANSLATES.descoverMore[currLanguage]}</div> */}
            {/* </div> */}
        </div>
    );
}

export default ServicesBanner;
