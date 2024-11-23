import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactBanner from "./Components/ContactBanner";
import MottoBanner from "./Components/MottoBanner";
import ServicesBanner from "./Components/ServicesBanner";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";

function Banner() {
    return (
        <Swiper
            className='home__banner'
            wrapperClass='home__banner--wrapper ui__display-align-center'
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            modules={[EffectFade, Autoplay]}
            effect='fade'
            speed={1000}
        >
            <SwiperSlide>
                <MottoBanner />
            </SwiperSlide>
            <SwiperSlide>
                <ServicesBanner />
            </SwiperSlide>
            <SwiperSlide>
                <ContactBanner />
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
