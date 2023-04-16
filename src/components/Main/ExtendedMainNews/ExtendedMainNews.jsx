import React, { useEffect, useState } from 'react';
import './ExtendedMainNews.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const parse = require('html-react-parser');

const ExtendedMainNews = () => {
    const {id} = useParams();
    const[selected, setSelected] = useState();

    useEffect(() => {
        axios.get('/news/get')
            .then(response => {
                setSelected(response.data.find((obj) => {
                    return obj.id === +id;
                }));
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    function convertDate(str) { // convert date & time
        let date = new Date(str);
        let day = String(date.getDate()).length < 2 ? '0' + String(date.getDate()) : String(date.getDate());
        let month = String(date.getMonth()).length < 2 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1);
        let year = date.getFullYear();
        return day + '-' +
          month + '-' +
          year
      }

    return (
        <div id='extendedMainNews'>
            <h2>{selected && selected.title}</h2>
            <div className="wrap">
                <img src={selected && selected.img} alt={'img'} />
                <div className="content">
                    {selected && parse(selected.content)}
                </div>
                <span className="date">{selected && convertDate(selected.date)}</span>
            </div>
        </div>
    );
};

export default ExtendedMainNews;