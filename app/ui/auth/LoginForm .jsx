import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <div  className="bg-transparent dark:bg-gradient-to-r from-sky-100  via-cyan-500 to-rose-100 mt-16 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="dark:bg-gradient-to-l from-sky-800 to-cyan-700 rounded-2xl max-w-md w-full space-y-8">
      <div>
      <div className="container mt-5">
  
</div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-400 dark:text-white">SignUp Form</h2>
       
      </div>
    <form onSubmit={submit} className="login-form">
      <div>
      <label htmlFor="username" className="block text-sm font-medium text-slate-400 dark:text-white">
        User Name
      </label>
        <input
          type="text"
          className="focus:ring-sky-500 text-gray-500  focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="User Name"
          required
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
      <label htmlFor="password" className="block text-sm font-medium text-slate-400 dark:text-white">
        Password
      </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="focus:ring-sky-500 text-gray-500  focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          required
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button 
        type="submit"
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log In</button>
      </div>
    </form>
    </div>
    </div>
  );
};