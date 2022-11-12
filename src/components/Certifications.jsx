import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import certificateOne from '../assets/images/certificate-1.jpg'
import certificateTwo from '../assets/images/certificate-2.jpg'
import certificateThree from '../assets/images/certificate-3.jpg'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Certifications = () => {
    return (
        <>
            <div className="container mt-28">
                <p className="text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black">Certifications</p>
                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={certificateOne} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={certificateTwo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={certificateThree} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Certifications;