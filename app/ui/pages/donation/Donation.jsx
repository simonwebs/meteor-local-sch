import React, { useState } from 'react';

export const Donation = () => {
  const [cardDetails, setCardDetails] = useState({
    account_holder: 'John Doe Wick',
    card_number: '1515 1212 1313 1313',
    exp_month: '11',
    exp_year: '21'
  })
  return (
    <>
      <div className="container-full w-screen h-screen bg-gradient-to-br from-sky-500 to-purple-500 flex items-center">
      <div className="container flex bg-slate-800 text-gray-300 h-screen items-center px-4">
        <div className="flex-col px-4">
          <h1 className="text-2xl font-semibold text-center 
          bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">PLEASE MAKE YOUR PAYMENT</h1>
          <small className="text-gray-400 text-center block">Enter credit card details</small>
          <hr className="opacity-20 mt-6 mb-8" />
            <input type="text" className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
            placeholder="Account Holder" onBlur={(e) => setCardDetails(current => ({...current, account_holder : e.target.value}))} />
            <input type="text" className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
            placeholder="Card Number" onBlur={(e) => setCardDetails(current => ({...current, card_number : e.target.value}))}/>
          <div className="flex">
            <input type="text" className="py-2 w-1/2 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
            placeholder="Month" onBlur={(e) => setCardDetails(current => ({...current, exp_month : e.target.value}))}/>
            <input type="text" className="py-2 w-1/2 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
            placeholder="Year" onBlur={(e) => setCardDetails(current => ({...current, exp_year : e.target.value}))}/>
          </div>
          <button className="btn-pay w-full mt-5 rounded-full px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500"
          onClick={() => {
            document.querySelector('.card').classList.add('animate-pulse')
            document.querySelector('.bg-circles').classList.add('animate-ping')
            setTimeout(() => {
              document.querySelector('.card').classList.remove('animate-pulse')
              document.querySelector('.bg-circles').classList.remove('animate-ping')
            }, 5000);
          }}
          >Pay Now</button>
        </div>
      </div>
      <div className="container mr-auto flex items-center justify-center">
        <div className="px-3 py-5 grid grid-cols-2 grid-rows-4 justify-center 
        relative z-10 
        bg-gradient bg-gradient-to-br from-gray-300 to-transparent w-1/2 
        bg-opacity-20 h-80 rounded-md shadow-md card">
        <img src="https://pngimage.net/wp-content/uploads/2018/05/chip-credit-card-png-7.png" 
            className="w-8 h-8 mx-auto col-span-2" />
            <h1 className="col-span-2 text-2xl font-semibold">{cardDetails.account_holder}</h1>
            <p className="col-span-2 text-gray-800 font-medium">{cardDetails.card_number}</p>
            <p><span className="text-xs text-gray-700">EXP DATE</span> {cardDetails.exp_month}/{cardDetails.exp_year}</p>
              <img src="https://png2.cleanpng.com/sh/374afa6ac89d40450e1a0e44b568f01c/L0KzQYm3VMA0N5J3j5H0aYP2gLBuTf1ie6VqitVqcnSwc8PshPl1NZRmitY2dnn2cX73gglubZ95ReVucobsc7a0jfF0fJZ3e9N7ZD24cbS6hvFmP2IAfKJsNj67Qoe4VsQ0OGI6SqQCOUO0SYK4UMU5NqFzf3==/kisspng-mastercard-credit-card-visa-payment-service-mastercard-5ac3fae719d0c6.8261643015227931911058.png" 
            className="w-10 h-10 ml-auto my-auto" />
        </div>
        <div className="rounded-full h-40 w-40 absolute top-1/4 right-7 bg-gradient-to-br from-white to-transparent z-0"></div>
        <div className="rounded-full h-20 w-20 absolute bottom-1/3 right-1/3 bg-gradient-to-tl from-white to-transparent z-0"></div>
        <div className="bg-circles rounded-full h-10 w-10 absolute bottom-1/4 right-1/4 bg-gradient-to-b from-white to-transparent z-0"></div>
      </div>
    </div>
    </>
  );
};
