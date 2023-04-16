import React, { useState } from 'react';
import './MainNews.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const MainNews = () => {
    const[title, setTitle] = useState('');
    const[title2, setTitle2] = useState('');
    const[img, setImg] = useState('');
    const[content, setContent] = useState('');

    const addNews = (e) => {
        e.preventDefault();

        if(title === '') {
            alert('Başlıq*');
        }
        else if(title2 === '') {
            alert('Başlıq2*');
        }
        else if(img === '') {
            alert('Şəkil*');
        }
        else if(content === '') {
            alert('Mövzu*');
        }
        else {
            axios.post('/news/add', {
                title,
                title2,
                img,
                content
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    return (
        <div id='mainNewsAdm'>
            <h2>Əsas xəbərlər</h2>
            <div className="wrap">
                <div className="input">
                    <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Başlıq' />
                    <input onChange={(e) => {setTitle2(e.target.value)}} type="text" placeholder='Başlıq2' />
                    <input onChange={(e) => {setImg(e.target.value)}} type="text" placeholder='Şəkil' />
                </div>
                <div className="img" style={{background: `url("${img && img}") no-repeat center/contain`}}></div>
            </div>
            <div id='ckeWrap'>
                <CKEditor config={{placeholder: "Mövzu", mediaEmbed: {previewsInData: true}}}  id="newsContent" editor={ClassicEditor} onChange={(e, editor) => {
                      setContent(editor.getData());      
                }} />
            </div>
            <button onClick={addNews} type='submit'>Əlavə et</button>
        </div>
    );
};

export default MainNews;