import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { TranslateBox } from './TranslateBox';


export const PlayGround = () => {

    return (
        <>
         
            <TranslateBox />
            <ToastContainer autoClose={3000} />
        </>
    );
};
