import React from 'react';
import './Main.css';
import { Route, Routes } from 'react-router-dom';

import Root from './About/About';
import AboutBank from './AboutBank/AboutBank';
import Error from '../Error/Error';

const Main = () => {
    return (
        <div id='about'>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/about-bank" element={<AboutBank />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default Main;