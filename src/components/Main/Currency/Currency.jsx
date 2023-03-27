import React from 'react';
import './Currency.css';

const Currency = () => {
    return (
        <div id='currency'>
            <div className="wrap">
                <div className="head"><span>09.03.2023</span><span>Alış</span><span>Satış</span></div>
                <div><span>USD</span><span>1.6980</span><span>1.7025</span></div>
                <div><span>EUR</span><span>1.7500</span><span>1.8200</span></div>
                <div><span>RUB</span><span>0.0180</span><span>0.0245</span></div>

                <span><span>*</span> Bəzi filiallar və şöbələr üzrə fərqli məzənnələr təyin edilə bilər</span>
                <a href='#'>Ətraflı</a>
            </div>
        </div>
    );
};

export default Currency;