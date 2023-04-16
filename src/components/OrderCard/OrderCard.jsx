import React, { useState } from 'react';
import './OrderCard.css';
import axios from 'axios';

const OrderCard = () => {
    const[card, setCard] = useState();
    const[year, setYear] = useState();
    const[currency, setCurrency] = useState();
    const[type, setType] = useState();
    const[filial, setFilial] = useState();
    const[name, setName] = useState();
    const[lName, setLName] = useState();
    const[fName, setFName] = useState();
    const[phone, setPhone] = useState();
    const[address, setAddress] = useState();
    const[secretWord, setSecretWord] = useState();
    const[frontPass, setFrontPass] = useState();
    const[backPass, setBackPass] = useState();

    const send = async (e) => {
        e.preventDefault();

        if(!card) {
            alert('Kartı seçin*');
        }
        else if(!year) {
            alert('Müddət*');
        }
        else if(!currency) {
            alert('Valyuta*');
        }
        else if(!type) {
            alert('Sifariş növü*');
        }
        else if(!filial) {
            alert('Filial seçin*');
        }
        else if(!name) {
            alert('Ad*');
        }
        else if(!lName) {
            alert('Soyad*');
        }
        else if(!fName) {
            alert('Ata adı*');
        }
        else if(!phone) {
            alert('Telefon*');
        }
        else if(!address) {
            alert('Ünvan*');
        }
        else if(!secretWord) {
            alert('Məxfi söz*');
        }
        else if(!frontPass) {
            alert('Şəxsiyyət vəsiqəsinin üz tərəfini seç*');
        }
        else if(!backPass) {
            alert('Şəxsiyyət vəsiqəsinin arxa tərəfini seç*');
        }
        else {
            await axios.post('/order/card', {
                card,
                year,
                currency,
                type,
                filial,
                name,
                lName,
                fName,
                phone,
                address,
                secretWord,
                frontPass,
                backPass
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    return (
        <div id='orderCard'>
            <h2>Kart sifarişi</h2>
            <div className="wrap">
                <form>
                    <h2 className="title">— Kart məlumatları —</h2>
                    <div className="cardInfo">
                        <div>
                            <label htmlFor="cardType">Kartı seçin</label>
                            <select onChange={(e) => {setCard(e.target.value)}} defaultValue='none' name="cardType" id="cardType">
                                <option value='none' disabled>-- Kartı seçin... --</option>
                                <option value='Mastercard Standard'>Mastercard Standard</option>
                                <option value='Mastercard Business'>Mastercard Business</option>
                                <option value='Mastercard Gold'>Mastercard Gold</option>
                                <option value='Mastercard Platinum'>Mastercard Platinum</option>
                                <option value='Mastercard Black Edition'>Mastercard Black Edition</option>
                                <option value='Visa Classic'>Visa Classic</option>
                                <option value='Visa Gold'>Visa Gold</option>
                                <option value='Visa Infinite'>Visa Infinite</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="duration">Müddət</label>
                            <select onChange={(e) => {setYear(e.target.value)}} defaultValue='none' name="duration" id="duration">
                                <option value='none' disabled>-- Müddət... --</option>
                                <option value='1 illik'>1 illik</option>
                                <option value='2 illik'>2 illik</option>
                                <option value='3 illik'>3 illik</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="currency">Valyuta</label>
                            <select name="currency" id="currency" defaultValue='none' onChange={(e) => {setCurrency(e.target.value)}}>
                                <option value='none' disabled>-- Valyuta... --</option>
                                <option value='AZN'>AZN</option>
                                <option value='USD'>USD</option>
                                <option value='EUR'>EUR</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="type">Sifariş növü</label>
                            <select onChange={(e) => {setType(e.target.value)}} name="type" id="type" defaultValue='none'>
                                <option value='none' disabled>-- Sifariş növü... --</option>
                                <option value='Adi'>Adi</option>
                                <option value='Təcili'>Təcili</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="filial">Filial seçin</label>
                            <select onChange={(e) => {setFilial(e.target.value)}} name="filial" id="filial" defaultValue='none'>
                                <option value='none' disabled>-- Filial seçin... --</option>
                                <option value='Baş ofis'>Baş ofis</option>
                                <option value='1 saylı filial'>1 saylı filial</option>
                                <option value='2 saylı filial'>2 saylı filial</option>
                                <option value='3 saylı filial'>3 saylı filial</option>
                                <option value='4 saylı filial'>4 saylı filial</option>
                                <option value='5 saylı filial'>5 saylı filial</option>
                                <option value='6 saylı filial'>6 saylı filial</option>
                                <option value='7 saylı filial'>7 saylı filial</option>
                                <option value='8 saylı filial'>8 saylı filial</option>
                                <option value='9 saylı filial'>9 saylı filial</option>
                                <option value='2 saylı şöbə'>2 saylı şöbə</option>
                                <option value='3 saylı şöbə'>3 saylı şöbə</option>
                                <option value='4 saylı şöbə'>4 saylı şöbə</option>
                                <option value='7 saylı şöbə'>7 saylı şöbə</option>
                            </select>
                        </div>
                    </div>

                    <h2 className="title">— Şəxsi məlumatlar —</h2>
                    <div className="personalInfo">
                        <div>
                            <label htmlFor="name">Ad:</label>
                            <input onChange={(e) => {setName(e.target.value)}} type="text" id='name' name='name' placeholder='Ad' />
                        </div>
                        <div>
                            <label htmlFor="lname">Soyad:</label>
                            <input onChange={(e) => {setLName(e.target.value)}} type="text" id='lname' name='lname' placeholder='Soyad' />
                        </div>
                        <div>
                            <label htmlFor="fName">Ata adı:</label>
                            <input onChange={(e) => {setFName(e.target.value)}} type="text" id='fName' name='fName' placeholder='Ata adı' />
                        </div>
                        <div>
                            <label htmlFor="num">Telefon:</label>
                            <input onChange={(e) => {setPhone(e.target.value)}} type="number" id='num' name='num' placeholder='Telefon' />
                        </div>
                        <div>
                            <label htmlFor="address">Ünvan:</label>
                            <input onChange={(e) => {setAddress(e.target.value)}} type="text" id='address' name='address' placeholder='Ünvan' />
                        </div>
                        <div>
                            <label htmlFor="secretWord">Məxfi söz:</label>
                            <input onChange={(e) => {setSecretWord(e.target.value)}} type="text" id='secretWord' name='secretWord' placeholder='Məxfi söz' />
                        </div>
                        <div>
                            <label htmlFor="frontPass">Şəxsiyyət vəsiqəsinin üz tərəfini seç</label>
                            <input onChange={(e) => {setFrontPass(e.target.value)}} type="file" id='frontPass' name='frontPass' />
                        </div>
                        <div>
                            <label htmlFor="backPass">Şəxsiyyət vəsiqəsinin arxa tərəfini seç</label>
                            <input onChange={(e) => {setBackPass(e.target.value)}} type="file" id='backPass' name='backPass' />
                        </div>
                    </div>
                    <button type='submit' onClick={send}>Göndər</button>
                    {/* {price === 0 ? false : <div className='priceWrap'>Cəmi <span className='price'>{price * year}</span> AZN</div>} */}
                </form>
            </div>
        </div>
    );
};

export default OrderCard;