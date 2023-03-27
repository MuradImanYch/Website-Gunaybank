import React from 'react';
import './Corporative.css';
import { Link } from 'react-router-dom';

const Corporative = () => {
    return (
        <div>
            <h2>Korporativ</h2>
            <div className="linkWrap">
                <Link to='#'><div>Tariflər</div></Link>
                <Link to='#'><div>Biznes kreditləri</div></Link>
                <Link to='#'><div>Əmanətlər</div></Link>
                <Link to='#'><div>Bank kartları</div></Link>
                <Link to='#'><div>İnkassasiya</div></Link>
            </div>
        </div>
    );
};

export default Corporative;