// @ts-nocheck
import React from 'react'


export const UpdateProfileForm = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
            you want to update your profile?
          </h3>
        </div>
  
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1">
                  {/* First name */}
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="text-red-500">
                  {/* {formik.touched.firstName && formik.errors.firstName} */}Err
                  here
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  {/* Last Name */}
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {/* Err msg */}
                <div className="text-red-500">
                  {/* {formik.touched.lastName && formik.errors.lastName} */}Err
                  here
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  {/* Email */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {/* err msg */}
                <div className="text-red-500">
                  {/* {formik.touched.email && formik.errors.email} */}Err here
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <textarea
                  rows="5"
                  cols="10"
                  className="rounded-lg appearance-none block w-full py-3 px-3 text-base text-center leading-tight text-gray-600 bg-transparent focus:bg-transparent  border border-gray-200 focus:border-gray-500  focus:outline-none"
                  type="text"
                ></textarea>
                {/* Err msg */}
                <div className="text-red-500">
                  {/* {formik.touched.bio && formik.errors.bio} */}Err here
                </div>
              </div>
              <div>
                {/* submit btn */}
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
  
            <div className="mt-4 mb-3">
              <div className="relative">
                <div className="flex flex-col justify-center items-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
