import React from 'react';
import './AboutBank.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination, Navigation]);

const AboutBank = () => {
    return (
        <div>
            <h2>Bankın tarixi</h2>

            <div className="wrap">
                <p>“Günay Bank” ASC ölkənin ən qədim kommersiya banklarından biri olaraq Azərbaycan Respublikası Mərkəzi Bankı tərəfindən verilmiş 23 noyabr 1992-ci il tarixli 23 Saylı İcazə əsasında fəaliyyət göstərir. 2017-ci ildə öz 25 illik yubileyini qeyd edən Bank öz müştərilərinə geniş spektrdə məhsul və xidmətlərin çeşidini təqdim edir.</p>
<br />
                <p>“Günay Bank” universal bank olaraq hazırda sürətlə inkişaf etməklə yanaşı, çoxsaylı müştərilərə bütün növ bank maliyyə xidmətləri göstərir.  Bankın əsas biznes fəaliyyəti hüquqi və fiziki şəxslərin  əmanətlərinin cəlb edilməsi, kreditlərin verilməsi,qiymətli kağızlar, dilinq və sürətli pul köçürmələrlə əməliyyatların aparılması, innovativ bank kartları və elektron xidmətlərinin təqdim edilməsi və banklar üçün qanunvericiliklə müəyyən edilmiş digər kommersiya fəaliyyətini göstərməkdən ibarətdir.</p>
<br />
                <p>Bununla yanaşı “Günay Bank” prioritet olaraq ticarət, ictimai-iaşə və xidmət obyektlərində nağdsız ödənişlərinin təşkil edilməsi, həmçinin, kommunal xidmətlərinin elektron şəkildə ödənilməsi və müxtəlif ödəniş sistemləri ilə ikitərəfli əlverişli əlaqələrin qurulması istiqamətində aktiv fəaliyyətini davam etdirir.</p>
<br />
                <p> “Günay Bank” Azərbaycan Banklar Assosiyasisının ,Əmanətlərin Sığortalanması Fondunun, Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun, Aqrar Kredit və Inkişaf Agentliyinin, Amerika-Azərbaycan Ticarət Palatasının, Azərbaycan Türkiyə İş Adamları birliyinin və Master Card beynalxalq ödəniş sisteminin  üzvüdür.</p>
<br />
                <p>Hal-hazırda “Günay Bank”-ın nəzdində Müştəri Xidmətləri Departamenti, 10 filial, 4 şöbə və 4 valyuta mübadilə məntəqəsi fəaliyyət göstərir. </p>
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

export default AboutBank;