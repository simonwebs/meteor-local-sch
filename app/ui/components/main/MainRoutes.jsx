// @ts-nocheck
import React, { Fragment } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route, Outlet , Navigate} from 'react-router-dom';
import { App } from '../../App'
import { RoutePaths } from './RoutePaths';
import { NotFound } from '../../pages/notFound/NotFound';
import { Home } from '../../pages/home/Home';
import { About } from '../../pages/about/About';
import { Contact } from '../../pages/contact/Contact';
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
import  { LoginForm } from '../../auth/LoginForm ';
import { Admin } from '../../pages/admin/Admin';
import { Settings } from'../../pages/admin/Settings';
import { PlayGround } from '../../pages/playGround/PlayGround';
import { HomePage } from '../../pages/blog/HomePage/HomePage';
import { CreatePost } from '../../pages/blog/posts/forms/CreatePost'
import { Quiz } from '../../pages/quiz/Quiz'
 

const ProtectedRoute = ({ user, redirectPath = '/loginPage' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

  export const MainRoutes = () => {
   
  return (
    <Fragment>
    
    <BrowserRouter>
      
      <ReactRoutes>
           <Route path={RoutePaths.ROOT} element={<App />}>
             <Route index element={<Home />} />
             <Route element={<LoginForm />} path={RoutePaths.LOGINFORM} />
             <Route element={<Admin />} path={RoutePaths.ADMIN} />
             <Route element={<Quiz />} path={RoutePaths.QUIZ} />
              <Route element={<Settings />} path={RoutePaths.SETTINGS} />
              <Route element={<Wallet/>} path={RoutePaths.WALLET} />
            <Route element={<Donation />} path={RoutePaths.DONATION} />
            <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST} />
            <Route element={<Testimonials/>} path={RoutePaths.TESTIMONIALS} />
            <Route element={<Gallery/>} path={RoutePaths.GALLERY} />
            <Route element={<Sermon/>} path={RoutePaths.SERMON} />
            <Route element={<CreatePost/>} path={RoutePaths.CREATEPOST} />
            <Route element={<About/>} path={RoutePaths.ABOUT} />
            <Route element={<ProtectedRoute><PlayGround /></ProtectedRoute>} path={RoutePaths.PLAYGROUND} />
            <Route element={<HomePage />} path={RoutePaths.HOMEPAGE} />
            <Route element={<Contact/>} path={RoutePaths.CONTACT} />
             <Route element={<Enrollement/>} path={RoutePaths.ENROLLEMENT} />
               <Route element={<EnrollementList/>} path={RoutePaths.ENROLLEMENTLIST} />
                <Route element={<EmploymentList/>} path={RoutePaths.EMPLOYMENTLIST} />
             <Route element={<ReEnrollement/>} path={RoutePaths.REENROLLEMENT} />
               <Route element={<ReEnrollementList/>} path={RoutePaths.REENROLLEMENTLIST} />
             <Route element={<Employment/> }path={RoutePaths.EMPLOYMENT} />
            <Route path="*" element={<NotFound />} />
            </Route>
         </ReactRoutes>
       
    </BrowserRouter>
  </Fragment>
    );
   }