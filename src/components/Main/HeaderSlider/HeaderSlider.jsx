import React from 'react';
import './HeaderSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

import img3 from '../../../assets/img/img3.png';

SwiperCore.use([Autoplay, Pagination]);


const HeaderSlider = () => {
    return (
        <div id='headerSlider'>
            <Swiper grabCursor={true} autoplay={{delay: 5000, disableOnInteraction: false}} pagination={{type: "progressbar"}}>
                <SwiperSlide>
                    <div className="wrap">
                        <img src="https://gunaybank.com/public/sliders/1640254755/mida-xetti-ile-guzestli-ipoteka_1640254755.png" alt="img1" />
                        <div>
                            <strong>Azərbaycan Respublikasının Mənzil İnşaatı Dövlət Agentliyi</strong>
                            <p>Artıq mənzil arzusunda olan hər kəs mənzil almaq şansı əldə edəcək.</p>
                            <button>Daha ətraflı</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrap">
                        <img src="https://gunaybank.com/public/sliders/1624548729/odenis-kartlari_1624548729.png" alt="img2" />
                        <div>
                            <strong>Ödəniş kartları</strong>
                            <p>Gündəlik alış-veriş və dünyanın hər yerində rahat və təhlükəsiz istifadə edə bilərsiniz</p>
                            <button>Visa kartlar</button>
                            <button>Master kartlar</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrap">
                        <img src={img3} alt="img3" />
                        <div>
                            <strong>İpoteka kreditləri</strong>
                            <p>Mənzil probleminin sərfəli yolu “Günaybank” ASC-dən İpoteka krediti əldə etməkdir!</p>
                            <button>Daha ətraflı</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeaderSlider;