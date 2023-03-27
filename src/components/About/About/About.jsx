import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div id='about'>
            <h2>Bank haqqında</h2>
            <div className="linkWrap">
                <Link to='#'><div>Bankın tarixi</div></Link>
                <Link to=''><div>Rekvizitlər</div></Link>
                <Link to=''><div>Rəhbərlik</div></Link>
                <Link to=''><div>Hesabatlar</div></Link>
                <Link to=''><div>Vakansiyalar</div></Link>
                <Link to=''><div>Risklərin idarə edilməsi</div></Link>
                <Link to=''><div>Əməletmə</div></Link>
                <Link to=''><div>Bankın Təşkilati Strukturu</div></Link>
                <Link to=''><div>Səhmlər</div></Link>
                <Link to=''><div>Törəmə təşkilatlar</div></Link>
                <Link to=''><div>Mükafatlandırma siyasəti</div></Link>
                <Link to=''><div>Daxili komitələr</div></Link>
                <Link to=''><div>Dividend siyasəti</div></Link>
                <Link to=''><div>Strateji baxış və missiya bəyanatı. Strateji hədəflər</div></Link>
                <Link to=''><div>Inkişaf siyasəti</div></Link>
                <Link to=''><div>Rəhbərlik və struktur dəyişiklikləri</div></Link>
                <Link to=''><div>Tərəfdaşlar</div></Link>
                <Link to=''><div>Səhmdarların yığıncaqları</div></Link>
            </div>
        </div>
    );
};

export default About;