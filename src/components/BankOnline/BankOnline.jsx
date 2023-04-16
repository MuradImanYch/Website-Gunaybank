import React from 'react';
import './BankOnline.css';
import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';

import login from '../../assets/ico/login.png';
import phone from '../../assets/ico/phone.png';
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination, Navigation]);

const BankOnline = () => {
    const faqToggle = (e) => {
        $(e.target).next('.answer').slideToggle();
        $(e.target).children('.title span').toggleClass('show');
    }

    return (
        <div id='bankOnline'>
            <h2><a target='_blank' href='https://bankonline.gunaybank.az/login.aspx'><button><img src={login} alt="login" /> DAXIL OL</button></a> <span>BankOnline</span></h2>

            <div>
                <div className="text">
                    <p>Bankçılıq xidmətinin fəaliyyət növlərindən biri, internet vasitəsi ilə bir çox bank xidmətlərini həyata keçirilməsini mümkün edən “Internet banking” sisteminin günümüzdə zərurətə çevrildiyini və istifadəsinə getdikcə daha çox ehtiyac yarandığını nəzərə alaraq, Günay Bank <span>“BankOnline”</span> internet bankinq sistemini yenilədik!</p>
                    <p>Onlayn rejimində demək olar ki, bütün bank əməliyyatlarınızı rahat və vaxt itirmədən həyat keçirən və olduqca fəal istifadə olunan bu sistem, Sizə bankla aranıızdakı məsafəni qət etmədən günün istənilən saatı, birbaşa öz hesablarınız üzrə aparılan dövriyyələr barədə məlumat əldə etməyə və digər müxtəlif əməliyyatların icrasına şərait yaradır.</p>
                    <p><span>“BankOnline”</span> – bir çox sahədə işlərinizi surətləndirərək, cari hesablarınızı idarə etmək, kredit kart, əmanət, hesabı sahiblərinin internet vasitəsilə öz hesabları üzrə aparılan pul dövriyyələrinin izləməsinə, həmçinin online ödənişlər etməyə, ödənişlərin tarixçəsini görməyə, kartdan karta pul köçürməsini etməyə, əmanət məbləğini artırmağa, bank daxili və xarici pul köçürmələrə imkan verən proqram təminatıdır və müxtəlif bank əməliyyatlarını həyata keçirmə imkanı verən bank xidmətidir.</p>
                    <p>Xidmətlə bağlı sualınız olarsa Bankın çağrı mərkəzi - 1546 saylı nömrəyə zəng vura bilərsiniz.</p>
                </div>
                <div className='numCard'>
                    <p>Xidmətlə bağlı sualınız olarsa Bankın çağrı mərkəzi</p>
                    <a href="tel:1546"><img src={phone} alt="phone" /></a>
                </div>
            </div>
            <div>
                <div className="faq">
                    <h2>Tez-tez verilən suallar</h2>
                    <div className="wrap">
                        <div onClick={faqToggle}>
                            <p className='title'> “BankOnline” internet-bankçılıq sistemində necə qeydiyyatdan keçə bilərəm?
                                 <span>+</span></p>
                            <p className='answer'>“Günay Bank” ASC-nin “BankOnline” internet bankçılıq sistemində qeydiyyatdan keçmək üçün Sizə xidmət edən Bankın müvafiq filial və ya şöbəsinə müraciət edə bilərsiniz.</p>
                        </div>
                        <div onClick={faqToggle}>
                            <p className='title'> Qeydiyyatdan keçərkən mobil telefon lazımdırmı?
                                 <span>+</span></p>
                            <p className='answer'>Bəli. Sizin mobil telefonunuz “BankOnline” sistemində ən vacib identifikasiya alətlərindən biridir.</p>
                        </div>
                        <div onClick={faqToggle}>
                            <p className='title'> “BankOnline” sistemi çərçivəsində hansı giriş hüquqları verilir?
                                 <span>+</span></p>
                            <p className='answer'>“BankOnline” sistemində öz istəyinizdən asılı olaraq 2 növ giriş hüququ mövcuddur: <br /> a) məhdud versiya – hesablara nəzarət edilməsi və çıxarışların alınması; <br /> b) tam versiya – hesablara nəzarət edilməsi, çıxarışların və müxtəlif növ əməliyyatların aparılması.</p>
                        </div>
                        <div onClick={faqToggle}>
                            <p className='title'> Məhdud versiyadan istifadə qaydası necə olur?
                                 <span>+</span></p>
                            <p className='answer'>Məhdud versiyaya qoşulmaq üçün Sizə “loqin” (istifadəçi adı) və “gizli şifrə”(porol) veriləcəkdir. Bunlardan istifadə edərək Siz öz hesablarınıza nəzarət edib, müvafiq qaydada çıxarışları və digər məlumatları əldə edə bilərsiniz.</p>
                        </div>
                        <div onClick={faqToggle}>
                            <p className='title'> Tam versiyadan istifadə etmək necə həyata keçirilir?
                                <span>+</span></p>
                            <p className='answer'>Tam versiyadan istifadə etmək üçün Siz ASAN imza əldə etməlisiniz.
</p>
                        </div>
                        <div onClick={faqToggle}>
                            <p className='title'>  “BankOnline” sistemi necə qorunur?
                                <span>+</span></p>
                            <p className='answer'>“BankOnline” məxfiliyin təmin edilməsi üzrə bankdaxili təhlükəsizlik sistemləri, xüsusi təhlükəsizlik sertifikatları və ASAN imzadan istifadə etməklə qorunur</p>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <Swiper className='linkSlider' grabCursor={true} pagination={{type: "progressbar"}} navigation={true}>
                        <SwiperSlide>
                            <div className="linkWrap">
                                <Link to=''><div>Kreditlər</div></Link>
                                <Link to=''><div>Əmanətlər</div></Link>
                                <Link to=''><div>Bank kartları</div></Link>
                                <Link to=''><div>Pul köçürmələri</div></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="linkWrap">
                                <Link to=''><div>Əmanət seyfləri</div></Link>
                                <Link to=''><div>Biznes kreditlər</div></Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BankOnline;