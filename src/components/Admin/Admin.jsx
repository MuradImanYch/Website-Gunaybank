import React, { useState } from 'react';
import './Admin.css';
import { Routes, Route, Link } from 'react-router-dom';
import $ from 'jquery';

import Feedback from './Feedback/Feedback';
import Error from '../Error/Error';
import Auth from './Auth/Auth';
import MainNews from './MainNews/MainNews';

const Admin = () => {
    const[menuToggle, setMenuToggle] = useState(true);

    const menuToggleFunc = () => {
        setMenuToggle(!menuToggle);
        
        menuToggle ? $('#admin #admMenu').animate({left: '0'}) : $('#admin #admMenu').animate({left: '-160px'});
    }

    const closeNav = () => {
        setMenuToggle(true);
        $('#admin #admMenu').animate({left: '-160px'});
    }

    return (
        <div id='admin'>
            <div id="admMenu">
                <ul>
                    <li><Link onClick={closeNav} to="/admin/feedback">Əlaqə saxlayanlar</Link></li>
                    <li><Link onClick={closeNav} to="/admin/mainNews">Əsas xəbərlər</Link></li>
                    <li><a onClick={closeNav} href="/admin/news">Xəbərlər</a></li>
                    <li><a onClick={closeNav} href="">wefwe</a></li>
                    <li><a onClick={closeNav} href="">wefwe</a></li>
                    <li><a onClick={closeNav} href="">wefwe</a></li>
                </ul>
                <div className='arrowBtn' onClick={menuToggleFunc}>{menuToggle ? '❯' : '❮'}</div>
            </div>
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/mainNews' element={<MainNews />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default Admin;