import { RoutePaths } from '../components/main/RoutePaths';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SignedIn = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
    <div className="space-y-8 mx-auto py-12 px-6">
    <h1 className="flex items-center text-4xl text-cyan-500">
            Sign in to your account
            </h1>
            <p className='text-lg  text-cyan-500'>
            to start jotting your simple jot
          </p>
       
        </div>
        <div className='space-y-10'>
          <button
            onClick={() => navigate(RoutePaths.BLOGSPAGE)}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           
          >
            Go to your jots
          </button>
        </div>
      </div>
  );
};