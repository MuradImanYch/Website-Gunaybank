import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div id='contacts'>
            <h2>Bizimlə əlaqə</h2>
            <div className="wrap">
                <h2 className="title">— Bizimlə əlaqə —</h2>

                <div className="table">
                    <div className='col'>
                        <div>Ünvan:</div>
                        <div>Bakı şəhəri, Nərimanov rayonu, Aşıq Alı küçəsi 45</div>
                    </div>
                    <div className='col'>
                        <div>Telefon:</div>
                        <div>1546</div>
                    </div>
                    <div className='col'>
                        <div>İctimaiyyətlə əlaqələr şöbəsi:</div>
                        <div>1546 (daxili nömrə 5549)</div>
                    </div>
                    <div className='col'>
                        <div>E-mail:</div>
                        <div>info@gunaybank.com</div>
                    </div>
                </div>

                <h2 className="title">— Əlaqə məlumatları —</h2>

                <form>
                    <div className="supportType">
                        <div>
                            <label htmlFor="type">Müraciətin növü</label>
                            <select defaultValue='none' name="type" id="type">
                                <option value='none' disabled>-- Seçilməyib --</option>
                                <option value='offer'>Təklif</option>
                                <option value='question'>Sorğu</option>
                                <option value='complaint'>Şikayət</option>
                            </select>
                        </div>
                    </div>
                    <div className="userData">
                        <div>
                            <label htmlFor="name">Ad</label>
                            <input type="text" id='name' placeholder='Ad' />
                        </div>
                        <div>
                            <label htmlFor="lname">Soyad</label>
                            <input type="text" id='lname' placeholder='Soyad' />
                        </div>
                        <div>
                            <label htmlFor="e-mail">E-mail</label>
                            <input type="email" id='e-mail' placeholder='E-mail' />
                        </div>
                        <div>
                            <label htmlFor="phone">Telefon</label>
                            <input type="number" id='phone' placeholder='Telefon' />
                        </div>
                        <div>
                            <label htmlFor="descr">Müraciətin məzmunu</label>
                            <input type="text" id='descr' placeholder='Müraciətin məzmunu' />
                        </div>
                        <div>
                            <label>Siz “Günay Bank”ın müştərisisiniz?</label>
                            <div className='radioSelect'>
                                <label>
                                    <input type="radio" name='isCustomer' />
                                    <span>Bəli</span>
                                </label>
                                <label>
                                    <input type="radio" name='isCustomer' />
                                    <span>Xeyir</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="text">Mətn</label>
                            <textarea name="text" id="text"></textarea>
                        </div>
                    </div>

                    <button type='submit'>Göndər</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;