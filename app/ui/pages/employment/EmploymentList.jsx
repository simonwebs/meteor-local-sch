/* eslint-disable jsx-a11y/no-redundant-roles */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { memo } from 'react';
import { EmploymentsCollection } from '../../../api/collections/EmploymentsCollection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'




export const EmploymentList = () => {
  const isLoading = useSubscribe('allEmployments');
  const employments = useFind(() =>
 EmploymentsCollection.find(
    { archived: { $ne: true } },
    { sort: { createdAt: -1 } }
  )
  );
  const removeEmployment = (event, _id) => {
    event.preventDefault();
    Meteor.call('employments.remove', { employmentId: _id });
  };

  if (isLoading()) {
    return <Loading />;
  }


  const EmploymentItem = memo(({ employment }) => (
    <div className="mt-8 m-7 flex p-1 flex-col bg-slate-300 rounded-lg dark:bg-gray-300">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="p-5 inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-2-rounded-lg md:rounded-lg">
          <div className="min-w-full divide-y divide-gray-300">
      
           
               
               <div className="col-span-1 flex flex-col text-center bg-slate-500 dark:bg-slate-700 rounded-lg shadow-2xl divide-y divide-gray-200">
                      <div className="flex-1 flex flex-col p-6">
                        <img className="w-15 h-15 flex-shrink-0 mx-auto rounded-full shadow-lg" src={employment.imageUrl} alt="" />
                      </div>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
        
        </dl>
        <div className="bg-gray-800 rounded-md">
        <a
          href="#"
          onClick={(event) => removeEmployment(event, employment._id)}
          className="text-sky-600 hover:text-gray-900"
          
        >
          <span className="text-rose-100">Delete</span>
        </a>
        </div>
         
                      <div className="ml-4 grid grid-cols-1 divide-y">
                    
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Employee Name :</span>&nbsp;{employment.name}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Employee Number :</span>&nbsp;{employment.walletId}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>ID Refrence Num :</span>&nbsp;{employment.identityRef}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Health Status:</span>&nbsp;{employment.health}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Role :</span>&nbsp;{employment.role}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Date of Birth :</span>&nbsp;{employment.birthDate}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Country : </span>&nbsp;{employment.country}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Previous Employment : </span>&nbsp;{employment.prevEmployment}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Religion : </span>&nbsp;{employment.religion}</div>
                      <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Street Address : </span>&nbsp;{employment.street}</div>
                                <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <a
              href={`mailto:${employment.email}`}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3 text-sky-500">Email</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={`tel:${employment.phone}`}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3 text-sky-500">Call</span>
            </a>
          </div>
        </div>
        
                      </div>
                    </div>
                  </div>

      <div className="min-w-0 flex-1">
         

     
      </div>
     
      
      
  </div>
   </div>
        </div>
      </div>
   
  
));

return (
 <div className="bg-slate-50 dark:bg-gray-800 min-w-full divide-y divide-gray-300">
  <div className="mt-10">
    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
       Employment List
    </h3>
   <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {employments.map((employment) => (
        <EmploymentItem key={employment._id} employment={employment} />
      ))}
    </ul>
  </div>
</div>
)};
