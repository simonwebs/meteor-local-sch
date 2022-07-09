// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import { MailIcon } from '@heroicons/react/solid'
import { HiUserCircle, HiPhotograph, HiPhone, HiBriefcase } from "react-icons/hi";
import {FaChurch , FaStreetView, FaRegAddressCard, FaWallet,FaClinicMedical } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Employment = (props) => {
 
 const [name, setName] = useState(''); // Formik
 const [imageUrl, setImageUrl] = useState('');
 const [male, setMale] = useState('');
 const [health, setHealth] = useState('');
const [female, setFemale] = useState('');
  const [street, setStreet] = useState('');
    const [religion, setReligion] = useState('');
    const [role, setRole] = useState('');
      const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [togo, setTogo] = useState('');
 const [benin, setBenin] = useState('');
  const [ghana, setGhana] = useState('');
   const [nigeria, setNigeria] = useState('');
    const [bourkinafaso, setBourkinafaso] = useState('')
  const [country, setCountry] = useState('');
  const [prevEmployment, setPrevEmployment] = useState('');
  const [email, setEmail] = useState('');
    const [identityRef, setIdentityRef] = useState('');
    const [walletId, setWalletId] = useState('');
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


const saveEmployment = () => {
  Meteor.call('employments.insert', { 
    name,
     female,
    male,
     phone,
     togo,
     ghana,
     health,
     nigeria,
     benin,
     bourkinafaso,
     walletId, 
     country, 
     role, 
     email, 
     birthDate,
      phone, 
      street, 
      imageUrl, 
      identityRef,
    prevEmployment,
     religion 
    }, (errorResponse) => {
    if (errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName('');
      setEmail('');
     setBirthDate('');
          setStreet('');
          setHealth('');
          setImageUrl('');
           setIdentityRef('');
             setWalletId('');
              setPhone('');
              setFemale('');
              setMale('');
              setRole('');
             setCountry('')
                setPrevEmployment('');
                setTogo('');
                setGhana('');
                 setReligion('');
                setBenin('');
                setBourkinafaso('');
                 setNigeria('');
     
      showSuccess({ message: 'Employment saved.' });
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
        
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-400 dark:text-white">Employment Form</h2>
           
          </div>
            <form action="" className="transparent dark:bg-slate-700 mt-20 p-4 rounded-lg" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-500 dark:text-white">
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
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Your Full Name"
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
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      
    </div>

    <div>
      <label htmlFor="health" className="block text-sm font-medium text-slate-400 dark:text-white">
        Health Status
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaClinicMedical className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
        <input
          type="health"
          name="health"
          id="health"
          value={health}
          onChange={e => setHealth(e.target.value)}
          placeholder="Health Status"
          className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      
    </div>

    <div>
      <label htmlFor="prevEmployment" className="block text-sm font-medium text-slate-500 dark:text-white">
       Previous Employment
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiBriefcase className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="prevEmployment"
                    value={prevEmployment}
                    onChange={e => setPrevEmployment(e.target.value)}
                    placeholder="Previous Employment"
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
          
      <div>             
      <label htmlFor="country" className="block text-sm font-medium text-slate-500 dark:text-white">
        Country
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <GoGlobe className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
          <select 
             id="country"
          onChange={e => setCountry(e.target.value)}
           type="country"
           className="text-gray-500 focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"{...props}>
         <option>Select Country</option>
          <option value="togo">Togo</option>
          <option value="benin">Benin</option>
           <option value="ghana">Ghana</option>
          <option value="nigeria">Nigeria</option>
           <option value="bourkinafaso">Bourkinafaso</option>
        </select>
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
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white file: w-full pl-10 sm:text-sm border-gray-300 rounded-md"

                  />
                </div>
              </div>
          <div>             
      <label htmlFor="role" className="block text-sm font-medium text-slate-500 dark:text-white">
        Role
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiBriefcase className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    placeholder="Role"
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
        Your Photo
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
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
                <div>
                <label htmlFor="religion" className="block text-sm font-medium text-slate-500 dark:text-white">
                Religion
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaChurch className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="religion"
                    value={religion}
                    onChange={e => setReligion(e.target.value)}
                    placeholder="Religion"
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
          className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
         
        />
      </div>
    </div>
    <div>
      <label htmlFor="identityRef" className="block text-sm font-medium text-slate-500 dark:text-white">
      ID Number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaRegAddressCard className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="identityRef"
                    value={identityRef}
                    onChange={e => setIdentityRef(e.target.value)}
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Id number :"
                  />
                </div>
              </div>
              </div>

              <button
                onClick={saveEmployment}
                className="bg-gradient-to-l  p-2 px-4 pt-2 mt-3 text-white dark:bg-gradient-to-l from-sky-800 to-cyan-700 rounded-lg baseline hover:bg-cyan-400"
              >
                <span>Save Information</span>
              </button>
            </form>
        
            </div>
      </div>
  
    </>
  );
};