import React from 'react';
import { Link } from 'react-router-dom';
import './CorrespondentBanks.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';

SwiperCore.use([Pagination, Navigation]);

const CorrespondentBankss = () => {
    return (
        <div id='correspondentBanks'>
            <h2>Müxbir banklar</h2>
            <div className="wrap">
                <span>06-02-2020</span>

                <div className="table">
                    <div>
                        <span>Bankların adı</span>
                        <span>THE CENTRAL BANK OF AZERBAIJAN</span>
                        <span>PKO BANK POLSKİ</span>
                        <span>SBERBANK CIB</span>
                        <span>JSC BANK OF GEORGIA</span>
                        <span>HALYK SAVINGS BANK OF KAZAKSTAN</span>
                        <span>UKREXIMBANK JSC</span>
                        <span>BELARUSBANK OSC</span>
                        <span>AKTİF YATIRIM BANKASI</span>
                        <span>ALFA BANK</span>
                    </div>
                    <div>
                        <span>Ölkə</span>
                        <span>Azərbaycan</span>
                        <span>Polşa</span>
                        <span>Rusiya</span>
                        <span>Gürcüstan</span>
                        <span>Qazaxıstan</span>
                        <span>Ukrayna</span>
                        <span>Belarusiya</span>
                        <span>Türkiyə</span>
                        <span>Rusiya</span>
                    </div>
                    <div>
                        <span>Şəhər</span>
                        <span>Bakı</span>
                        <span>Varşava</span>
                        <span>Moskva</span>
                        <span>Tbilisi</span>
                        <span>Alma Ata</span>
                        <span>Kiyev</span>
                        <span>Minsk</span>
                        <span>İstambul</span>
                        <span>Moskva</span>
                    </div>
                    <div>
                        <span>S.W.I.F.T.</span>
                        <span>NABZAZ2C</span>
                        <span>BPK0PLPW</span>
                        <span>SABRRUMM</span>
                        <span>BAGAGE22</span>
                        <span>HSBKKZK</span>
                        <span>EXBSUAUX</span>
                        <span>AKBBBY2X</span>
                        <span>CAYTTRİSXXX</span>
                        <span>ALFARUMM</span>
                    </div>
                </div>
                <span>"Günay Bank" ASC geniş müxbir şəbəkəsinə malik olaraq, öz müştərilərinə 15 xarici valyuta növü üzrə ödəniş aparmağı təklif edir.</span>
            </div>
            <Swiper className='linkSlider' grabCursor={true} pagination={{type: "progressbar"}} navigation={true}>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Bankın tarixi</div></Link>
                        <Link to='#'><div>Rekvizitlər</div></Link>
                        <Link to='#'><div>Rəhbərlik</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Hesabatlar</div></Link>
                        <Link to='#'><div>Vakansiyalar</div></Link>
                        <Link to='#'><div>Müxbir banklar</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Risklərin idarə edilməsi</div></Link>
                        <Link to='#'><div>Əməletmə</div></Link>
                        <Link to='#'><div>Bankın Təşkilati Strukturu</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Səhmlər</div></Link>
                        <Link to='#'><div>Törəmə təşkilatlar</div></Link>
                        <Link to='#'><div>Mükafatlandırma siyasəti</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Daxili komitələr</div></Link>
                        <Link to='#'><div>Dividend siyasəti</div></Link>
                        <Link to='#'><div>Strateji baxış və missiya bəyanatı. Strateji hədəflər</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Inkişaf siyasəti</div></Link>
                        <Link to='#'><div>Rəhbərlik və struktur dəyişiklikləri</div></Link>
                        <Link to='#'><div>Tərəfdaşlar</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="linkWrap">
                        <Link to='#'><div>Səhmdarların yığıncaqları</div></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CorrespondentBankss;