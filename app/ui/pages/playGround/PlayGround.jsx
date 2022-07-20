import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import {useTranslation} from "react-i18next";


export const PlayGround = () => {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [detectLanguageKey, setdetectedLanguageKey] = useState('')
    const getLanguageSource = () => {
        axios.post(`https://libretranslate.de/detect`, {
            q: inputText
        })
        .then((response) => {
            setdetectedLanguageKey(response.data[0].language)
        })
    }
    const translateText = () => {
        setResultText(inputText)

        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedText)
        })
    }

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    useEffect(() => {
       axios.get(`https://libretranslate.de/languages`)
       .then((response) => {
        setLanguagesList(response.data)
       })

       getLanguageSource()
    }, [inputText])
    return (
      <div  className="bg-transparent dark:bg-gradient-to-r from-sky-100  via-cyan-500 to-rose-100 mt-16 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="dark:bg-gradient-to-l from-sky-800 to-cyan-700 rounded-2xl max-w-md w-full space-y-8">
        <div>
        <div className="container mt-5">
    
  </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-400 dark:text-white">Student Enrollement Form</h2>
         
        </div>
              
        <form action="" className="transparent text-gray-500 dark:bg-slate-700 mt-20 p-4 rounded-lg">
                        <textarea
                            value={inputText}
                            id="message"
                            name="message"
                            rows={4}
                            key="{input}"
                            className="bg-white dark:bg-slate-800 py-3 px-4 block w-full shadow-lg dark:text-slate-300 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            placeholder='Type Text to Translate..'
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <select className="text-gray-500 focus:ring-sky-500 focus:border-sky-500 hover:text-white block w-full pl-10 hover:bg-gray-500 backdrop:sm:text-sm border-gray-300 rounded-md"
                         onChange={languageKey}>
                            <option>Please Select Language..</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>

                        <textarea 
                            value={resultText}
                            id="message"
                            name="message"
                            key="{result}"
                            rows={4}
                            
                            className="bg-white dark:bg-slate-800 py-3 px-4 block w-full shadow-lg dark:text-slate-300 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            onChange={e => setResultText(e.target.value)}
                            placeholder='Your Result Translation..'
                           
                        />

                        <button 
                           
                            onClick={translateText}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Translate</button>
                    </form>
                </div>
            </div>
        
    )
}
