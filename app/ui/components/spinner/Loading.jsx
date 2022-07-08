import React from 'react';

export const Loading = () => (
          <div className="flex items-center justify-center w-screen max-h-screen">
            <div className="flex items-center rounded-2xl bg-cyan-400 px-4 py-2 text-white">
            <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

  </svg>
  Processing...
</button>
            </div>
          </div>
  );
