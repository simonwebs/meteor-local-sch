// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { memo } from 'react';
import { ReEnrollementsCollection } from '../../../api/collections/ReEnrollementsCollection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
// eslint-disable-next-line import/no-unresolved
import { Loading } from '../../components/spinner/Loading';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'



export const ReEnrollementList = () => {
  const isLoading = useSubscribe('allReEnrollements');
  const reEnrollements = useFind(() =>
 ReEnrollementsCollection.find(
    { archived: { $ne: true } },
    { sort: { createdAt: -1 } }
  )
  );
  const removeReEnrollement = (event, _id) => {
    event.preventDefault();
    Meteor.call('reEnrollements.remove', { reEnrollementId: _id });
  };

  if (isLoading()) {
    return <Loading />;
  }


  const ReEnrollementItem = memo(({ reEnrollement }) => (
    <div className="mt-8 m-7 flex p-1 flex-col bg-slate-300 rounded-lg dark:bg-gray-300">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="p-5 inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-2-rounded-lg md:rounded-lg">
          <div className="min-w-full divide-y divide-gray-300">
      
           
               
               <div className="col-span-1 flex flex-col text-center bg-slate-500 dark:bg-slate-700 rounded-lg shadow-2xl divide-y divide-gray-200">
                 
                          <div className="flex-1 flex flex-col p-6">
                            <img className="w-15 h-15 flex-shrink-0 mx-auto rounded-full shadow-lg" src={reEnrollement.imageUrl} alt="" />
                          </div>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
            
            </dl>
            <div className="bg-gray-800 rounded-md">
            <a
              href="#"
              onClick={(event) => removeReEnrollement(event, reEnrollement._id)}
              className="text-sky-600 hover:text-gray-900"
              
            >
              <span className="text-rose-100">Delete</span>
            </a>
            </div>
             
                          <div className="ml-4 grid grid-cols-1 divide-y">
                        
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Student Name :</span>&nbsp;{reEnrollement.name}</div>
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Student Number :</span>&nbsp;{reEnrollement.walletId}</div>
                            
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Date of Birth :</span>&nbsp;{reEnrollement.birthDate}</div>
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Grade :</span>&nbsp;{reEnrollement.grade}</div>
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Gender :</span>&nbsp;{reEnrollement.gender}</div>
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Street Address : </span>&nbsp;{reEnrollement.street}</div>
                                    <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${reEnrollement.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-sky-500">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${reEnrollement.phone}`}
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
           Re-Enrollement List
        </h3>
       <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reEnrollements.map((reEnrollement) => (
            <ReEnrollementItem key={reEnrollement._id} reEnrollement={reEnrollement} />
          ))}
        </ul>
      </div>
    </div>
  )};