import React from 'react';

export const SelectBox = ({ id, select, props }) => {

    return (
        <>
         <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          
        </div>
                <select id={id}   className="bg-cyan-600 text-white focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"{...props} onChange={select}>
                    <option value="">Select Language</option>
                    <option value="en">English</option>
                    <option value="hi"> Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <option value="fr"> French</option>
                    <option value="tr"> Turkish</option>
                    <option value="ee"> Ewe</option>
                    <option value="fn"> Fon</option>
                </select>
            </div>
        </>
    );
};