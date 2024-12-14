import React, { useEffect, useState } from "react";
import Partner from "./Components/Partner";
import { PARTNERS } from "utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useWindowSizes from "hooks/useWindowSizes";

function Partners() {
    const [slidesPerView, setSlidesPerView] = useState(5);
    const { windowWidth } = useWindowSizes();

    useEffect(() => {
        if (windowWidth < 300) {
            setSlidesPerView(1);
        } else if (windowWidth < 500) {
            setSlidesPerView(2);
        } else if (windowWidth < 1000) {
            setSlidesPerView(3);
        } else {
            setSlidesPerView(5);
        }
    }, [windowWidth]);

    return (
        <div className='home__partners'>
            <div className='home__partners--title ui__title'>Parteneri</div>
            <Swiper
                className='home__partners--slider'
                wrapperClass='home__partners--wrapper ui__display-align-center'
                spaceBetween={20}
                slidesPerView={slidesPerView}
                loop={true}
                autoplay={{ delay: 2000 }}
                modules={[Autoplay, Pagination]}
                speed={1000}
                pagination={{
                    clickable: true,
                }}
            >
                {PARTNERS.map((partner, index) => {
                    return (
                        <SwiperSlide>
                            <Partner
                                key={index}
                                info={partner}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Partners;
