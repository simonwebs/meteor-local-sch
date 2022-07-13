// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import { MailIcon } from '@heroicons/react/solid'
import { HiUserCircle, HiPhotograph, HiPhone,  HiBriefcase } from "react-icons/hi";
import { FaStreetView, FaWallet } from "react-icons/fa";
import { BsFillCalendarDateFill, BsGenderMale } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const ReEnrollement = (props) => {
 
 const [name, setName] = useState(''); // Formik
   const [gender, setGender] = useState('');
    const [grade, setGrade] = useState('');
     const [imageUrl, setImageUrl] = useState('');
  const [street, setStreet] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
 const [walletId, setWalletId] = useState('0');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');



 // eslint-disable-next-line no-shadow
 const showError = ({ message }) => {
   setError(message);
   setTimeout(() => {
     setError('');
   }, 5000);
 };

 // eslint-disable-next-line no-shadow
 const showSuccess = ({ message }) => {
  setSuccess(message);
  setTimeout(() => {
    setSuccess('');
  }, 5000);
};


const saveReEnrollement = () => {
  Meteor.call('reEnrollements.insert', { name, walletId, email, imageUrl, birthDate, phone, street, gender, grade }, (errorResponse) => {
    if (errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName('');
      setGender('');
       setGrade('');
     setBirthDate('');
          setStreet('');
           setImageUrl('');
           setEmail('');
             setWalletId('');
              setPhone('');
      showSuccess({ message: 'Re-Enrollement saved.' });
    }
  });
};


  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });


  return (
    <>
     
 <div  className="bg-transparent dark:bg-gradient-to-r from-sky-100  via-cyan-500 to-rose-100 mt-16 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-gradient-to-l from-sky-800 to-cyan-700 rounded-2xl max-w-md w-full space-y-8">
          <div>
        
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-400 dark:text-white">Student Re-Enrollement Form</h2>
           
          </div>
            <form action="" className="transparent dark:bg-slate-700 mt-20 p-4 rounded-lg" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-500 dark:text-white">
        Full Name
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiUserCircle className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    autoComplete="name"
                    className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
             
                <div>
      <label htmlFor="email" className="block text-sm font-medium text-slate-400 dark:text-white">
        Email
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MailIcon className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-slate-400 dark:text-white">
        Gender
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BsGenderMale className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
    <select 
                     id="gender"
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                      className="text-gray-500 focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"{...props}>
    
    <option>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
 
      </div>
    </div>
    <div>
    <div>
      <label htmlFor="Grade" className="block text-sm font-medium text-slate-500 dark:text-white">
       Class
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiBriefcase className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                    <select
                    type="text"
                      id="grade"
                      value={grade}
                      onChange={e => setGrade(e.target.value)}
                      placeholder="Grade"
                      autoComplete="gender-type"
                      className="text-gray-500 focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"{...props}>
                       <option>Select Class</option>
                      <option value="kg-1">KG 1</option>
                      <option value="kg-2">KG 2</option>
                      <option value="grade-1">Grade / Basic 1</option>
                      <option value="grade-2">Grade / Basic 2</option>
                      <option value="grade-3">Grade / Basic 3</option>
                      <option value="grade-4">Grade / Basic 4</option>
                      <option value="grade-5">Grade / Basic 5</option>
                      <option value="grade-6">Grade / Basic 6</option>
                      <option value="grade-7">JSS 1</option>
                      <option value="grade-8">JSS 2</option>
                      <option value="grade-9">JSS 3</option>
                      <option value="grade-10">SSS 1</option>
                      <option value="grade-11">SSS 2</option>
                      <option value="grade-12">SSS 3</option>
                    </select>
                    </div>
              </div>
              </div>

      <div>             
      <label htmlFor="street" className="block text-sm font-medium text-slate-500 dark:text-white">
        Street Address
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaStreetView className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="street"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    placeholder="Street Address"
                    className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"

                  />
                </div>
              </div>
         
                <div>
      <label htmlFor="birthDate" className="block text-sm font-medium text-slate-500 dark:text-white">
        Date of Birth
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BsFillCalendarDateFill className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="date"
                    id="birthdate"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    className="text-gray-500 focus:ring-sky-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white  block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
      <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-500 dark:text-white">
        Photo
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiPhotograph className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="imageUrl"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="Image Upload"
                    className="focus:ring-sky-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
               
             
              <div>
      <label htmlFor="phone" className="block text-sm font-medium text-slate-500 dark:text-white">
      Phone
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiPhone className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="focus:ring-sky-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
      <label htmlFor="walletId" className="block text-sm font-medium text-slate-500 dark:text-white">
      WalletId
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaWallet className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div> 
         <input
          type="text"
          id="walletId"
          value={walletId}
           placeholder="WalletId ID:"
          onChange={(e) => setWalletId(e.target.value)}
          className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
         
        />
      </div>
    </div>
    </div>
              <button
                onClick={saveReEnrollement}
                className="bg-gradient-to-l  p-2 px-4 pt-2 mt-7 text-white dark:bg-gradient-to-l from-sky-800 to-cyan-700 rounded-lg baseline hover:bg-cyan-400"
              >
                <span>Save Information</span>
              </button>
            </form>
        
            </div>
      </div>
  
    </>
  );
};