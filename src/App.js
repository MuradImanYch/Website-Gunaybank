import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import $ from 'jquery';

import logoMob from './assets/img/logoMob.png';
import logo from './assets/img/logo.png';
import az from './assets/ico/az.png';
import search from './assets/ico/search.png';
import phone from './assets/ico/phone.png';

import Main from './components/Main/Main';
import About from './components/About/Main';
import Individual from './components/Individual/Main';
import Corporative from './components/Corporative/Main';
import MoneyTransfers from './components/MoneyTransfers/MoneyTransfers';
import CorrespondentBanks from './components/CorrespondentBanks/CorrespondentBanks';
import ServiceNetwork from './components/ServiceNetwork/Main';
import Contacts from './components/Contacts/Contacts';
import BankOnline from './components/BankOnline/BankOnline';
import OrderCard from './components/OrderCard/OrderCard';

import Error from './components/Error/Error';

const App = () => {
  const[barState, setBarstate] = useState(true); 

  useEffect(() => {
    $('nav a').click(() => {
      $('main .container').hide();
      $('main .container').fadeIn('fast');
      window.scrollTo(0, 0);
    });

    $('nav .langWrap').mouseenter(() => {
      $('nav .langWrap .inner').slideDown('fast');
      $('nav .langWrap > span').css({transform: 'rotate(180deg)'});
    });
    $('nav .langWrap').mouseleave(() => {
      $('nav .langWrap .inner').slideUp('fast');
      $('nav .langWrap > span').css({transform: 'rotate(0deg)'});
    });
  }, []);

  const menuToggle = () => {
    if($(window).width() <= 1024) { // for mobile
        setBarstate(!barState);
        if(barState) {
            $('.bar1').css({'transform': 'rotate(-45deg) translate(-8px, 7px)'});
            $('.bar2').css({'opacity': '0'});
            $('.bar3').css({'transform': 'rotate(45deg) translate(-8px, -8px)'});
            $('nav ul').slideDown();
            $('.bar1').css({'backgroundColor': '#ffc95d'});
            $('.bar2').css({'backgroundColor': '#ffc95d'});
            $('.bar3').css({'backgroundColor': '#ffc95d'});
            $('body').css({'overflow': 'hidden'});
            $('nav ul').css({'overflow':'scroll'});
        }
        else {
            $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
            $('.bar2').css({'opacity': '1'});
            $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
            $('nav ul').slideUp();
            $('.bar1').css({'backgroundColor': '#fff'});
            $('.bar2').css({'backgroundColor': '#fff'});
            $('.bar3').css({'backgroundColor': '#fff'});
            $('body').css({'overflow': 'auto'});
            $('nav ul').css({'overflow':'hidden'});
        }
    }
  }

  $('nav ul li a').click(() => {
    setBarstate(true);
    $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
    $('.bar2').css({'opacity': '1'});
    $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
    $('nav ul').slideUp();
    $('.bar1').css({'backgroundColor': '#fff'});
    $('.bar2').css({'backgroundColor': '#fff'});
    $('.bar3').css({'backgroundColor': '#fff'});
    $('body').css({'overflow': 'auto'});
    $('nav ul').css({'overflow':'hidden'});
  });

  const searchPopup = () => {
    $('.searchWrap').fadeIn();
  }
  const closePopup = () => {
    $('.searchWrap').fadeOut();
  }

  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <Link to="/"><img src={$(window).width() < 1024 ? logoMob : logo} alt="logo" /></Link>
            <ul>
              <li><Link to="/about">Bank haqqında</Link></li>
              <li><Link to="/individual">Fərdi</Link></li>
              <li><Link to="/corporative">Korporativ</Link></li>
              <li><Link to="/money-transfers">Pul köçürmələri</Link></li>
              <li><Link to="/correspondent-banks">Müxbir əlaqələr</Link></li>
              <li><Link to="/service-network">Xidmət şəbəkəsi</Link></li>
              <li><Link to="/contacts">Bizimlə əlaqə</Link></li>
              <li className='nav2li'><Link to='/internet-banking'>BankOnline</Link></li>
              <li className='nav2li'><Link to=''>Ödənişlər</Link></li>
              <li className='nav2li'><Link to='/order-card'>Kart sifarişi</Link></li>
            </ul>
            <div className='langWrap'>
              <img src={az} alt="az" />
              <span>▼</span>
              <div className="inner">
                <img src={az} alt="az" />
                <img src={az} alt="az" />
              </div>
            </div>
            {$(window).width() < 1024 ? <img src={search} alt="search" onClick={searchPopup} /> : false}
            <div id="menuToggleMobDiv" onClick={menuToggle}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
          </div>
        </nav>
        <ul className="nav2">
          <div>
            <li><Link to='/internet-banking'><div>BankOnline</div></Link></li>
            <li><Link to=''><div>Ödənişlər</div></Link></li>
            <li><Link to='/order-card'><div>Kart sifarişi</div></Link></li>
            <li onClick={searchPopup} className='search'><span><div><img src={search} alt="search" /></div></span></li>
          </div>
        </ul>
        <div className="searchWrap">
          <div className='close' onClick={closePopup}>X</div>
          <div className="container">
            <input type="text" />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about/*' element={<About />} />
          <Route path='individual/*' element={<Individual />} />
          <Route path='corporative/*' element={<Corporative />} />
          <Route path='money-transfers' element={<MoneyTransfers />} />
          <Route path='correspondent-banks' element={<CorrespondentBanks />} />
          <Route path='service-network/*' element={<ServiceNetwork />} />
          <Route path='contacts/*' element={<Contacts />} />
          <Route path='internet-banking' element={<BankOnline />} />
          <Route path='order-card' element={<OrderCard />} />

          <Route path='*' element={<Error />} />
        </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          <div>
            <Link to="/"><img src={$(window).width() < 1024 ? logoMob : logo} alt="logo" /></Link>
            <img src={phone} alt="phone" />
          </div>
          <div>
            <div className='copy'>© "GünayBank" ASC</div>
            <div>
              <a href="https://www.facebook.com/GunayBank/" target='_blank'><div className="fb"></div></a>
              <a href="https://www.instagram.com/gunaybank/" target='_blank'><div className="insta"></div></a>
              <a href="https://twitter.com/gunaybankasc" target='_blank'><div className="twitter"></div></a>
            </div>
            <div>
              <a className='infobank' href="https://infobank.az/" target='_blank'></a>
              <a className='gunaysigorta' href="https://www.gunaysigorta.az/az/" target='_blank'></a>
              <a className='msp' href="https://bizimpullar.az/" target='_blank'></a>
              <a className='cbar' href="https://cbar.az/" target='_blank'></a>
              <a className='adif' href="https://www.adif.az/" target='_blank'></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;