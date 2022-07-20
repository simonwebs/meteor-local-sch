// @ts-nocheck
import React from "react";

export const HomePage = () => {
  return (
    <>
      <section className="mt-16 pb-10 bg-white dark:bg-gray-800">
        <div className="relative container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="mt-20 w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-lg font-bold text-blue-400 dark:text-white">
                Create posts to educate
              </span>
              <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl dark:text-white font-bold font-heading">
                Pen down your ideas{" "}
                <span className="text-yellow-500">By creating a post</span>
              </h2>
              <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl dark:text-gray-100">
                Your post must be free from racism and unhealthy words
              </p>
              <a
                className="inline-block px-12 py-5 text-lg dark:text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                href="/"
              >
                Thanks
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="flex items-center justify-center w-45 h-45 rounded-full py-4" src='./img/photo-1594608661623-aa0bd3a69d98.jpg' alt='#' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

