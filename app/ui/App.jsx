// @ts-nocheck
import React from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainRoutes } from './components/main/MainRoutes';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

export const App = () => (
    <>

    <div>
   <Header />
    <div id="about" className="dark:bg-blueDark
     bg-white ring-slate-900/5  dark:text-white">
  <Outlet />
    </div>
    <Footer/>
    </div>
    </>
);