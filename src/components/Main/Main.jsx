import React from 'react';
import Currency from './Currency/Currency';
import './Main.css';

import HeaderSlider from './HeaderSlider/HeaderSlider';
import NewsSlider from './NewsSlider/NewsSlider';

const Main = () => {
    return (
        <div id='main'>
            <HeaderSlider />
            <section id='currencyNewsSlider'>
                <Currency />
                <NewsSlider />
            </section>
        </div>
    );
};

export default Main;