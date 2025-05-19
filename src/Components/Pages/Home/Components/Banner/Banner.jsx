import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactBanner from "./Components/ContactBanner";
import MottoBanner from "./Components/MottoBanner";
import ServicesBanner from "./Components/ServicesBanner";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

function Banner() {
    return (
        <div className='home__banner'>
            <div className='home__banner--wrapper'>
                <ServicesBanner />
            </div>
        </div>
    );
}

export default Banner;
