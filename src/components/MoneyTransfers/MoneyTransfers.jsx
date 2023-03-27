import React from 'react';
import { Link } from 'react-router-dom';
import './MoneyTransfers.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';

SwiperCore.use([Pagination, Navigation]);

const MoneyTransfers = () => {
    return (
        <div id='moneyTransfers'>
            <h2>Pul köçürmələri</h2>
            <div className="wrap">
                <span>06-07-2019</span>
                <p>İstənilən filial və şöbəmizə yaxınlaşmaqla xaricə pul göndərə və ya xaricdə yaşayan yaxınlarınızdan pul qəbul edə bilərsiniz. Pul köçürmə sistemlərindən yalnız fiziki şəxslər istifadə edə bilərlər. Göndərdiyiniz pul dünya miqyaslı təhlükəsizlik sistemi tərəfindən mühafizə olunur, buna görə də pulunuzun vaxtında və yalnız göndərilən adama çatacağına zəmanət verilir. <br /> <span>“Günay Bank” müştərilərə aşağıdakı təcili pul köçürmə sistemlərini təklif edir:</span></p>

                <div className="imgWrap">
                    <a target='_blank' href="https://www.contact-sys.com/ru"><img src="https://gunaybank.com/public/content/ct_logo__0.jpg" alt="img1" /></a>
                    <a target='_blank' href="https://www.kapitalbank.az/money-transfers/xazri"><img src="https://gunaybank.com/public/content/2.jpg" alt="img2" /></a>
                    <a target='_blank' href="https://www.westernunion.com/az/en/home.html"><img src="https://gunaybank.com/public/content/4.png" alt="img3" /></a>
                    <a target='_blank' href="https://koronapay.com/"><img src="https://gunaybank.com/public/content/5.png" alt="img4" /></a>
                    <a target='_blank' href="https://www.upt.com.tr/"><img src="https://gunaybank.com/public/news/1546947712/gunay-bank-turkiyenin-meshur-layihesi-olan-universal-payment-transfer-upt-adli-beynelxalq-pulkocurme-sistemini-cari-ilin-sonunda-oz-xidmet-sektoruna-elave-etdi_1546947712.jpg" alt="img5" /></a>
                </div>
            </div>
            <Swiper className='linkSlider' grabCursor={true} pagination={{type: "progressbar"}} navigation={true}>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Tariflər</div></Link>
                        <Link to='#'><div>Kreditlər</div></Link>
                        <Link to='#'><div>Əmanətlər</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Bank kartları</div></Link>
                        <Link to='#'><div>Pul köçürmələri</div></Link>
                        <Link to='#'><div>Online xidmətlər</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Əmanət seyfləri</div></Link>
                        <Link to='#'><div>Kampaniyalar</div></Link>
                        <Link to='#'><div>Kommunal ödənişlər</div></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MoneyTransfers;