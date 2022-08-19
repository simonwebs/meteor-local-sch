// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import { MailIcon } from '@heroicons/react/solid'
import { HiUserCircle, HiPhotograph, HiPhone,  HiBriefcase } from "react-icons/hi";
import {FaChurch , FaStreetView, FaWallet, FaClinicMedical } from "react-icons/fa";
import { BsFillCalendarDateFill, BsGenderMale } from "react-icons/bs";
import {GoGlobe} from "react-icons/go";
import { RiParentFill, } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Enrollement = (props) => {

 const [name, setName] = useState(''); // Formik

  const [male, setMale] = useState('');
   const [imageUrl, setImageUrl] = useState('');
  const [role, setRole] = useState('');
  const [female, setFemale] = useState('');
  const [street, setStreet] = useState('');
  const [gender, setGender] = useState('');
  const [motherName, setMotherName] = useState('');
   const [togo, setTogo] = useState('');
     const [grade, setGrade] = useState('');
    const [benin, setBenin] = useState('');
     const [ghana, setGhana] = useState('');
     const [health, setHealth] = useState('');
      const [nigeria, setNigeria] = useState('');
       const [religion, setReligion] = useState('');
       const [bourkinafaso, setBourkinafaso] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
 const [walletId, setWalletId] = useState('0');

  const [prevSchool, setPrevSchool] = useState('');
 
  const [email, setEmail] = useState('');
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


const saveEnrollement = () => {
 Meteor.call('enrollements.insert', { 
  name,
   country,
    email,
    imageUrl,
    walletId,
    fatherName,
    motherName,
     gender,
     grade,
    female,
    male,
     phone,
     togo,
     role,
     health,
     ghana,
     nigeria,
     benin,
     bourkinafaso,
    religion,
    birthDate,
    street,
    prevSchool,
  }, (errorResponse) => {
    if (errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName('');
      setEmail('');
     setBirthDate('');
       setFatherName('');
        setMotherName('');
          setStreet('');
          setImageUrl('');
           setFemale('');
           setHealth('');
            setMale('');
             setWalletId('');
              setPhone('');
             setCountry('');
             setGrade('');
                setPrevSchool('');
                setTogo('');
                setRole('');
                setGhana('');
                 setReligion('');
                setBenin('');
                setBourkinafaso('');
                 setNigeria('');
     
      showSuccess({ message: 'Enrollement saved.' });
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
          <div className="container mt-5">
			
		</div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-400 dark:text-white">Student Enrollement Form</h2>
           
          </div>
            <form action="" className="transparent text-gray-500 dark:bg-slate-700 mt-20 p-4 rounded-lg" data-aos="fade-up">
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
                    className="focus:ring-sky-500 text-gray-500  focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
      <label htmlFor="email" className="block text-sm font-medium text-slate-400 dark:text-white">
      Select Gender
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BsGenderMale className="h-5 w-5 text-sky-400 " aria-hidden="true" />
        </div>
       
    <select 
                     id="gender"
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                      className="text-gray-500 focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"{...props}>
    
    
    <option>Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
 
      </div>
    </div>
    <div>
    <div>
      <label htmlFor="grade" className="block text-sm font-medium text-slate-500 dark:text-white">
      Select Class
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaClinicMedical className="h-5 w-5 text-sky-400 " aria-hidden="true" />
        </div>
                    <select
                    type="text"
                      id="grade"
                      value={grade}
                      onChange={e => setGrade(e.target.value)}
                      placeholder="Grade"
                      autoComplete="gender-type"
                      className="text-gray-500 focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"{...props}>
                       <option>Class</option>
                      <option value="kg-1">Nursery 1</option>
                      <option value="kg-2">Nursery 2</option>
                      <option value="kg-3">Nursery 3</option>
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
      <label htmlFor="prevSchool" className="block text-sm font-medium text-slate-500 dark:text-white">
       Previous School
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiBriefcase className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="prevSchool"
                    value={prevSchool}
                    onChange={e => setPrevSchool(e.target.value)}
                    placeholder="Previous School"
                    className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
          
      <div>             
      <label htmlFor="country" className="block text-sm font-medium text-slate-500 dark:text-white">
      Select Country
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
             <option>Country</option>
          <option value="benin">Benin</option>
          <option value="togo">Togo</option>
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
                    className="focus:ring-sky-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white file: w-full pl-10 sm:text-sm border-gray-300 rounded-md"

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
                    className="focus:ring-sky-500 focus:border-sky-500  hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
    <div>
      <label htmlFor="motherName" className="block text-sm font-medium text-slate-500 dark:text-white">
      Mother Name
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <RiParentFill className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="motherName"
                    value={motherName}
                    onChange={e => setMotherName(e.target.value)}
                    className="focus:ring-sky-500 focus:border-sky-500 block hover:bg-slate-500 hover:text-whiteblock w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Father Name:"
                  />
                </div>
              </div>
            
              
              
    <div>
      <label htmlFor="fatherName" className="block text-sm font-medium text-slate-500 dark:text-white">
      Father Name
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <RiParentFill className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
                  <input
                    type="text"
                    id="fatherName"
                    value={fatherName}
                    onChange={e => setFatherName(e.target.value)}
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Father Name:"
                  />
                </div>
              </div>
              </div>
              
              


              <button
                onClick={saveEnrollement}
                className="inline-flex items-center mt-4 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Save Information</span>
              </button>
            </form>
        
            </div>
      </div>
  
    </>
  );
};