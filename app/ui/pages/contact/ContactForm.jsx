import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const ContactForm = () => {
 
 const [name, setName] = useState(''); // Formik
  const [gender, setGender] = useState('');
  const [male, setMale] = useState('');
   const [imageUrl, setImageUrl] = useState('');
  const [female, setFemale] = useState('');
  const [street, setStreet] = useState('');
  const [other, setOther] = useState('');
  const [motherName, setMotherName] = useState('');
   const [togo, setTogo] = useState('');
    const [benin, setBenin] = useState('');
     const [walletId, setWalletId] = useState('');
     const [ghana, setGhana] = useState('');
      const [nigeria, setNigeria] = useState('');
       const [religion, setReligion] = useState('');
       const [bourkinafo, setBourkinafo] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [prevSchool, setPrevSchool] = useState('');
  const [grade, setGrade] = useState('');
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


const saveContact = () => {
  Meteor.call('contacts.insert', { name, togo, benin, walletId, religion, ghana, nigeria, bourkinafo, country, email, birthDate, phone, street, imageUrl, fatherName, motherName, grade, gender, prevSchool, male, female, other }, (errorResponse) => {
    if (errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName('');
      setEmail('');
     setBirthDate('');
      setGender('');
       setFatherName('');
        setMotherName('');
         setCountry('');
          setStreet('');
          setImageUrl('');
           setFemale('');
            setMale('');
             setOther('');
              setPhone('');
               setGrade('');
                setPrevSchool('');
                setTogo('');
                setGhana('');
                 setReligion('');
                setBenin('');
                  setWalletId('');
                setBourkinafo('');
     
      showSuccess({ message: 'Contact saved.' });
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
      <div id="enrollement" className="relative py-4">
       
          <div
            className="absolute inset-0 flex items-center bg-transparent dark:bg-slate-800"
           
          >
          
       
        </div>
        <div className="relative max-w-4xl mx-auto bg-transparent dark:bg-slate-800">
          <div className="relative bg-transparent dark:bg-slate-800 rounded p-8">
           <div className="max-w-6xl mx-auto z-20">
          <h2
            className="text-4xl font-bold text-center mt-20"
            data-aos="fade-left"
          >
            New Student Enrollment
          </h2>
           </div>
            <form action="" className="mt-20" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    // eslint-disable-next-line react/jsx-props-no-multi-spaces
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    autoComplete="name"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <div className="mt-1">
                    <select
                      id="gender"
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                      placeholder="Gender"
                      autoComplete="gender-type"
                      className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prevSchool"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Previous School
                  </label>
                  <input
                    type="text"
                    id="prevSchool"
                    value={prevSchool}
                    onChange={e => setPrevSchool(e.target.value)}
                    placeholder="Previous School"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Grade
                  </label>
                  <div className="mt-1">
                    <select
                      id="grade"
                      value={grade}
                      onChange={e => setGrade(e.target.value)}
                      placeholder="Grade"
                      autoComplete="gender-type"
                      className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                    >
                      <option>KG 1</option>
                      <option>KG 2</option>
                      <option>Grade / Basic 1</option>
                      <option>Grade / Basic 2</option>
                      <option>Grade / Basic 3</option>
                      <option>Grade / Basic 4</option>
                      <option>Grade / Basic 5</option>
                      <option>Grade / Basic 6</option>
                      <option>JSS 1</option>
                      <option>JSS 2</option>
                      <option>JSS 3</option>
                      <option>SSS 1</option>
                      <option>SSS 2</option>
                      <option>SSS 3</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="birthDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    placeholder="Date of Birth"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fatherName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Father Name
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    value={fatherName}
                    onChange={e => setFatherName(e.target.value)}
                    placeholder="Father's Name"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="motherName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mother Name
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    value={motherName}
                    onChange={e => setMotherName(e.target.value)}
                    placeholder="Mother's Name"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>
                <div>
                   <div>
                  <label
                    htmlFor="religion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Religion
                  </label>
                  <input
                    type="text"
                    id="religion"
                    value={religion}
                    onChange={e => setReligion(e.target.value)}
                    placeholder="Religion"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>
                <div>

                </div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>
                <div> 
                 <label
                    htmlFor="walletId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    WalletId
                  </label>
                  <input
                    type="number"
                    id=" walletId"
                    value={walletId}
                    onChange={e => setWalletId(e.target.value)}
                    placeholder=" WalletId"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>


                <div>
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street Name
                  </label>
                  <input
                    type="text"
                    id="street"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    placeholder="Street Name"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                      autoComplete="country-name"
                      className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                    >
                      <option>Benin</option>
                      <option>Togo</option>
                      <option>Nigeria</option>
                      <option>Ghana</option>
                      <option>Bourkinafo</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="imageUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="imageUrl"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="Image Upload"
                    className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                </div>
               
              </div>

              <button
                onClick={saveContact}
                className="p-3 px-6 pt-2 mt-3 text-white bg-cyan-500 rounded baseline hover:bg-cyan-400"
              >
                <span>Save Information</span>
              </button>
            </form>
          </div>
          </div>
             </div>
    </>
  );
};
