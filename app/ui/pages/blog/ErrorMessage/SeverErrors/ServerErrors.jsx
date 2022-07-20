// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

export const ServerErrors = () => {
  return (
    <section>
      <div className="flex bg-gray-900 flex-wrap items-center md:h-screen">
        <div className="flex items-center w-full md:w-1/2 md:h-full py-12 md:py-0 px-20 md:px-0 bg-gray-900">
          <img className="mx-auto lg:max-w-lg" src='./images/err.svg' alt="error" />
        </div>
        <div className="w-full md:w-1/2 px-4 py-16 md:py-0 text-center bg-gray-900">
          <span className="text-3xl lg:text-4xl text-blue-600 font-bold font-heading">
            Whoops!
          </span>
          <h2 className="mb-2 text-xl lg:text-2xl text-red-600 mt-2  font-bold font-heading">
            Error here
          </h2>

          <div>
            <Link
              to="/"
              className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
            >
              Go Home
            </Link>
            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-600 hover:bg-blue-700 rounded">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

