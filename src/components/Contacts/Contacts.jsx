import React, { useState } from 'react';
import './Contacts.css';
import axios from 'axios';

const Contacts = () => {
    const[type, setType] = useState('');
    const[name, setName] = useState('');
    const[lName, setLName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[title, setTitle] = useState('');
    const[isCustomer, setIsCustomer] = useState('');
    const[text, setText] = useState('');

    const send = async (e) => {
        e.preventDefault();

        if(!type) {
            alert('Müraciətin növü*');
        }
        else if(!name) {
            alert('Ad*');
        }
        else if(!lName) {
            alert('Soyad*');
        }
        else if(!email) {
            alert('E-mail*');
        }
        else if(!phone) {
            alert('Telefon*');
        }
        else if(!title) {
            alert('Müraciətin məzmunu*');
        }
        else if(!isCustomer) {
            alert('Siz “Günay Bank”ın müştərisisiniz?*');
        }
        else if(!text) {
            alert('Mətn*');
        }
        else {
            await axios.post('/contacts/feedback', {
                name,
                lName,
                email, 
                phone,
                title,
                isCustomer,
                text,
                type
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

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
                            <select defaultValue='none' name="type" id="type" onChange={(e) => setType(e.target.value)}>
                                <option value='none' disabled>-- Seçilməyib --</option>
                                <option value='Təklif'>Təklif</option>
                                <option value='Sorğu'>Sorğu</option>
                                <option value='Şikayət'>Şikayət</option>
                            </select>
                        </div>
                    </div>
                    <div className="userData">
                        <div>
                            <label htmlFor="name">Ad</label>
                            <input type="text" id='name' placeholder='Ad' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="lname">Soyad</label>
                            <input type="text" id='lname' placeholder='Soyad' onChange={(e) => setLName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="e-mail">E-mail</label>
                            <input type="email" id='e-mail' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone">Telefon</label>
                            <input type="number" id='phone' placeholder='Telefon' onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="title">Müraciətin məzmunu</label>
                            <input type="text" id='title' placeholder='Müraciətin məzmunu' onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label>Siz “Günay Bank”ın müştərisisiniz?</label>
                            <div className='radioSelect'>
                                <label>
                                    <input type="radio" name='isCustomer' value='Bəli' onChange={(e) => setIsCustomer(e.target.value)} />
                                    <span>Bəli</span>
                                </label>
                                <label>
                                    <input type="radio" name='isCustomer' value='Xeyir' onChange={(e) => setIsCustomer(e.target.value)} />
                                    <span>Xeyir</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="text">Mətn</label>
                            <textarea name="text" id="text" onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                    </div>

                    <button onClick={send} type='submit'>Göndər</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;