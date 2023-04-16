import React, { useEffect, useState } from 'react';
import './Feedback.css';
import $ from 'jquery';
import axios from 'axios';

import bin from '../../../assets/ico/bin.png';

const Feedback = () => {
    const[name, setName] = useState();
    const[lName, setLName] = useState();
    const[email, setEmail] = useState();
    const[phone, setPhone] = useState();
    const[title, setTitle] = useState();
    const[isCustomer, setIsCustomer] = useState();
    const[text, setText] = useState();
    const[delBtnId, setDelBtnId] = useState();
    const[type, setType] = useState();
    const[date, setDate] = useState();

    useEffect(() => {
        axios.get('/contacts/getFB')
        .then(response => {
            setDate(response.data && response.data.reverse().map((e) => {
                let date = new Date(e.date);
                let day = String(date.getDate()).length < 2 ? '0' + String(date.getDate()) : String(date.getDate());
                let month = String(date.getMonth()).length < 2 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1);
                let year = date.getFullYear();
                let hours = String(date.getHours()).length < 2 ? '0' + String(date.getHours()) : String(date.getHours());
                let minutes = String(date.getMinutes()).length < 2 ? '0' + String(date.getMinutes()) : String(date.getMinutes());

                return <span key={'date' + e.id}>{day + '.' + month + '.' + year + ' | ' + hours + ':' + minutes}</span>
            }));
            setName(response.data && response.data.map((e) => {
                return <span key={'name' + e.id}>{e.name}</span>
            }));
            setLName(response.data && response.data.map((e) => {
                return <span key={'lName' + e.id}>{e.lName}</span>
            }));
            setEmail(response.data && response.data.map((e) => {
                return <span key={'email' + e.id}>{e.email}</span>
            }));
            setPhone(response.data && response.data.map((e) => {
                return <span key={'phone' + e.id}>{e.phone}</span>
            }));
            setTitle(response.data && response.data.map((e) => {
                return <span key={'title' + e.id}>{e.title}</span>
            }));
            setIsCustomer(response.data && response.data.map((e) => {
                return <span key={'isCustomer' + e.id}>{e.isCustomer}</span>
            }));
            setText(response.data && response.data.map((e) => {
                return <span key={'text' + e.id}>{e.text}</span>
            }));
            setDelBtnId(response.data && response.data.map((e) => {
                return <span key={'id' + e.id}><button onClick={del}><img src={bin} alt='poz' id={`id${e.id}`} /></button></span>
            }));
            setType(response.data && response.data.map((e) => {
                return <span key={'type' + e.id}>{e.type}</span>
            }));
        })
        .catch(err => {
            console.log(err);
        });

        const del = (e) => {
            axios.post('/contacts/delFB', {
                id: $(e.target).attr('id').match(/\d/).toString()
            });
        }
    }, [delBtnId]);

    return (
        <div id="feedbackAdm">
            <h2>Əlaqə saxlayanlar</h2>
            <div className="wrap">
                <div className="table">
                    <div>
                        <span>Vaxt</span>
                        {date}
                    </div>
                    <div>
                        <span>Müraciətin növü</span>
                        {type}
                    </div>
                    <div>
                        <span>Ad</span>
                        {name}
                    </div>
                    <div>
                        <span>Soyad</span>
                        {lName}
                    </div>
                    <div>
                        <span>E-mail</span>
                        {email}
                    </div>
                    <div>
                        <span>Telefon</span>
                        {phone}
                    </div>
                    <div>
                        <span>Mövzu</span>
                        {title}
                    </div>
                    <div>
                        <span>Günaybank müştərisi</span>
                        {isCustomer}
                    </div>
                    <div>
                        <span>Mətn</span>
                        {text}
                    </div>
                    <div>
                        <span>Poz</span>
                        {delBtnId}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;