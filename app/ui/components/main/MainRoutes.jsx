// @ts-nocheck
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
  import React from 'react';
  import { App } from '../../App'
  import { RoutePaths } from './RoutePaths';
  import { NotFound } from '../../pages/notFound/NotFound';
  import { Home } from '../../pages/home/Home';
  import { About } from '../../pages/about/About';
  import { Blog } from '../../pages/blog/Blog';
  import { ContactForm } from '../../pages/contact/ContactForm';
  import { Testimonials } from '../../pages/testimonial/Testimonials';
  import { ContactList } from '../../pages/contact/ContactList';
  import { Wallet } from '../../pages/wallet/Wallet';
  import { Enrollement } from '../../pages/enroll/Enrollement';
  import { EnrollementList } from '../../pages/enroll/EnrollementList';
  import { EmploymentList } from '../../pages/employment/EmploymentList';
  import { ReEnrollement } from '../../pages/enroll/ReEnrollement';
  import { ReEnrollementList } from '../../pages/enroll/ReEnrollementList';
  import { Employment } from '../../pages/employment/Employment';
   import { Sermon } from '../../pages/sermon/Sermon'
   import { Gallery } from '../../pages/gallery/Gallery'
   import { Donation } from '../../pages/donation/Donation';
  import { LoginForm } from '../../auth/LoginForm';
  import { Admin } from '../../pages/admin/Admin';
import { Settings } from '../../pages/admin/Settings'


  
  export const MainRoutes = () => (
      
      <BrowserRouter>
    <ReactRoutes>
         <Route path={RoutePaths.ROOT} element={<App />}>
           <Route index element={<Home />} />
           <Route element={<LoginForm />} index />
           <Route element={<Admin />} path={RoutePaths.ADMIN} />
            <Route element={<Settings />} path={RoutePaths.SETTINGS} />
        
        
          <Route element={<Donation />} path={RoutePaths.DONATION} />
          <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST} />
          <Route element={<Testimonials/>} path={RoutePaths.TESTIMONIALS} />
          <Route element={<Gallery/>} path={RoutePaths.GALLERY} />
          <Route element={<Blog/>} path={RoutePaths.BLOG} />
          <Route element={<Sermon/>} path={RoutePaths.SERMON} />
          <Route element={<About/>} path={RoutePaths.ABOUT} />
          <Route element={<Wallet/>} path={RoutePaths.WALLET} />
          <Route element={<ContactForm/>} path={RoutePaths.CONTACTFORM} />
           <Route element={<Enrollement/>} path={RoutePaths.ENROLLEMENT} />
             <Route element={<EnrollementList/>} path={RoutePaths.ENROLLEMENTLIST} />
              <Route element={<EmploymentList/>} path={RoutePaths.EMPLOYMENTLIST} />
           <Route element={<ReEnrollement/>} path={RoutePaths.REENROLLEMENT} />
             <Route element={<ReEnrollementList/>} path={RoutePaths.REENROLLEMENTLIST} />
           <Route element={<Employment/>} path={RoutePaths.EMPLOYMENT} />
          <Route path="*" element={<NotFound />} />
          </Route>
       </ReactRoutes>
  </BrowserRouter>
    );
  