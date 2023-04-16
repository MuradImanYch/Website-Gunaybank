import React, { useEffect, useState } from 'react';
import './HeaderSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

import axios from 'axios';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Pagination]);


const HeaderSlider = () => {
    const[news, setNews] = useState();

    useEffect(() => {
        axios.get('/news/get')
        .then(response => {
            setNews(response.data && response.data.reverse().splice(0, 3).map(e => {
                return <SwiperSlide key={'id' + e.id}>
                            <div className="wrap">
                                <img src={e.img} alt="img" />
                                <div>
                                    <strong>{e.title}</strong>
                                    <p>{e.title2}</p>
                                    <Link to={'/main-news/read/' + e.id}><button>Daha ətraflı</button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
            }));
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div id='headerSlider'>
            <Swiper grabCursor={true} autoplay={{delay: 5000, disableOnInteraction: false}} pagination={{type: "progressbar"}}>
                {news}
            </Swiper>
        </div>
    );
};

export default HeaderSlider;