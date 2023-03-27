import React from 'react';
import './Individual.css';
import { Link } from 'react-router-dom';

const Individual = () => {
    return (
        <div id='individual'>
            <h2>Fərdi</h2>
            <div className="linkWrap">
                <Link to='#'><div>Tariflər</div></Link>
                <Link to=''><div>Kreditlər</div></Link>
                <Link to=''><div>Əmanətlər</div></Link>
                <Link to=''><div>Bank Kartları</div></Link>
                <Link to=''><div>Pul köçürmələri</div></Link>
                <Link to=''><div>Onlayn xidmətlər</div></Link>
                <Link to=''><div>Əmanət seyfləri</div></Link>
                <Link to=''><div>Kampaniyalar</div></Link>
            </div>
        </div>
    );
};

export default Individual;