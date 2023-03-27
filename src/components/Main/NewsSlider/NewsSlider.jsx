import React from 'react';
import './NewsSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const NewsSlider = () => {
    return (
        <div id='newsSlider'>
            <Swiper grabCursor={true} navigation={true} autoplay={{delay: 5000, disableOnInteraction: false}} pagination={{clickable: true}}>
                <SwiperSlide>
                    <div className="wrap">
                        <span className='date'>2023-01-17</span>
                        <span className='descr'>Apple Pay tezliklə "Günay Bank"da!</span>
                        <a href="#">Bütün xəbərlər</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrap">
                        <span className='date'>2022-12-13</span>
                        <span className='descr'>Bank dələduzluğunun növbəti üsulu aşkarlanıb:</span>
                        <a href="#">Bütün xəbərlər</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrap">
                        <span className='date'>2022-11-23</span>
                        <span className='descr'>Düz 30 ildir Sizinləyik.</span>
                        <a href="#">Bütün xəbərlər</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default NewsSlider;