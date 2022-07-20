// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { memo } from 'react'; 
import { ContactsCollection } from '../../../api/collections/ContactsCollection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'


export const ContactList = () => {
    const isLoading = useSubscribe('allContacts');
    const contacts = useFind(() =>
   ContactsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
    );
    const removeContact = (event, _id) => {
      event.preventDefault();
      Meteor.call('contacts.remove', { contactId: _id });
    };

    if (isLoading()) {
      return <Loading />;
    }

   const ContactItem = memo(({ contact }) =>  (
    <div className="mt-8 m-7 flex p-1 flex-col bg-slate-300 rounded-lg dark:bg-gray-300">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="p-5 inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-2-rounded-lg md:rounded-lg">
          <div className="min-w-full divide-y divide-gray-300">
      
           
               
            
             <dl className="mt-1 flex-grow flex flex-col justify-between">
            
            </dl>
            <div className="bg-gray-400">
            <a
              href="#"
              onClick={(event) => removeContact(event, contact._id)}
              className="text-red-600 hover:text-red-900"
              
            >
              <span className="text-rose-100">Delete</span>
            </a>
            </div>
             
                          <div className="ml-4 grid grid-cols-1 divide-y">
                        
                            <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Name :</span>&nbsp;{contact.name}</div>
                                   <div className="text-left dark:text-slate-300 text-sm"><span className='text-sky-400'>Subject : </span>&nbsp;{contact.subject}</div>
                                   <div className="text-left dark:text-slate-300 text-sm0"><span className='text-sky-400'>Message : </span>&nbsp;{contact.message}</div>
                                    <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${contact.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-sky-500">Email</span>
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
      
      
   ));
    
  return (
     <div className="bg-slate-50 dark:bg-gray-800 min-w-full divide-y divide-gray-300">
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
           Contact List
        </h3>
       <ul role="list" className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  )};
