// @ts-nocheck
import React from 'react'
import { useEffect, useState } from 'react';

const axios = require('axios').default;


export const PlayGround = () => {
    const [options, setOptions] = useState([]);
    const [to, setTo] = useState('en');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
  
    const translate = () => {
      // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
     
      const params = new URLSearchParams();
      params.append('q', input);
      params.append('source', from);
      params.append('target', to);
      params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
  
      axios.post('https://libretranslate.de/translate',params, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res=>{
        console.log(res.data)
        setOutput(res.data.translatedText)
      })
    };
  
    useEffect(() => {
      axios
        .get('https://libretranslate.de/languages', {
          headers: { accept: 'application/json' },
        })
        .then((res) => {
          console.log(res.data);
          setOptions(res.data);
        });
    }, []);
  
  return (
       <>  
     <di className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Play with Words</h1>
        </div>
      
    
      </div>
      <div>
      To ({to}) :
        <select onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      <div className="mt-1">
        <textarea
         rows={4}
         name="comment"
         id="comment"
           className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
          onInput={(e) => setInput(e.target.value)}
        >
          
        </textarea>
      </div>
      <div>
      <div className="sm:flex sm:flex-col sm:align-center">
        From ({from}) :
        <select onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      <div className="mt-1">
        <textarea
         rows={4}
         name="comment"
         id="comment"
          className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
         value={output}>
         
         </textarea>
      </div>
      <div>
        <button 
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        onClick={e=>translate()}>Translate</button>
      </div>
    </div>
    </div>
    </div>
    </di>
    </>
  )
}

