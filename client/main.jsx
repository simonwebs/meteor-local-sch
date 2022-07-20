// @ts-nocheck
import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { Meteor } from 'meteor/meteor';
import { MainRoutes } from '../app/ui/components/main/MainRoutes';
import { RiseLoader } from "react-spinners/ClipLoader";



Meteor.startup(() => {
  document.documentElement.setAttribute('lang', 'en');
  const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
    <Suspense fallback={<RiseLoader />}>
    <MainRoutes/>
    </Suspense>, 
)});

