import React from 'react';
import './Main.css';
import { Route, Routes } from 'react-router-dom';

import Root from './Individual/Individual';
import Error from '../Error/Error';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Root />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default Main;