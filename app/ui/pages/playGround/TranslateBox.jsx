// @ts-nocheck
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { SelectBox } from "./SelectBox";
import { error, success } from "./notification";
import copy from "copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { Animation } from "./Animation";


export const TranslateBox = () => {

    const [q, setQ] = useState("");
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [output, setOutput] = useState("");

    const handleSelectChange = ({ target: { value, id } }) => {
        id === "source" && setSource(value);
        id === "target" && setTarget(value);
    }

    const handleGetRequest = async () => {
        if (q.length < 1) {
            setOutput("");
            return false;
        };
        if (source === "" || target === "") {
            return error("Please select language");
        }
        try {
            let res = await axios.post("", { q, source, target, format: "text" });
            res = res.data.translatedText;
            setOutput(res);
        } catch (err) {
            console.log(err);
        }
    }

    const copyToClipboard = (text) => {
        copy(text);
        success("Copied to clipboard!")
    }

    const resetText = () => {
        if (q === "" && output === "") {
            error("Textbox is already empty!")
        } else {
            success("Text removed!")
            setQ("");
            setOutput("");
        }
    }
 
//Debounce Function
    useEffect(() => {

        let timerID = setTimeout(() => {
            handleGetRequest();
        }, 1000);

        return () => {
            clearTimeout(timerID);
        }

    }, [q]);


    return (
        <>
              <div className="mt-16 relative bg-black dark:bg-slate-800 py-4">
       
       <div
         className="absolute inset-0 flex items-center bg-transparent dark:bg-slate-800"
        
       >
       
    
     </div>
     <div  className="relative max-w-4xl mx-auto bg-transparent dark:bg-slate-800">
       <div className="relative bg-transparent dark:bg-slate-800 rounded p-8">
        <div className="max-w-6xl mx-auto z-20">
       <h2
         className="text-4xl font-bold text-center mt-20 dark:text-slate-300"
         data-aos="fade-left"
       >
        Practice Translation
       </h2>
        </div>
        
                    <SelectBox id={'source'} select={handleSelectChange} />
                    <div className="mt-1">
                        <textarea 
                        onChange={(e) => { setQ(e.target.value) }} value={q} 
                        className="bg-white dark:bg-slate-800 py-3 px-4 block w-full shadow-lg dark:text-slate-300 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="mt-1">
                    <span id="message-max" className="text-sm dark:text-slate-300">{q.length}/250</span>
                        <AiFillCopy onClick={() => { copyToClipboard(q) }} className="h-5 w-5 text-sky-400" />
                        <MdClear onClick={resetText} className="h-5 w-5 text-red-500" />
                    </div>
                </div>

                <div>
                    <SelectBox id={'target'} select={handleSelectChange} />
                    <div  className="bg-white dark:bg-slate-800 py-3 px-4 block w-full shadow-lg dark:text-slate-300 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md">
                    <span id="message-max" className="text-sm dark:text-slate-300">{output}</span>
                    </div>
                    <div className="mt-1">
                         <span id="message-max" className="text-sm dark:text-slate-300">{output.length}/250</span>
                        <AiFillCopy  onClick={() => { copyToClipboard(output) }} className="h-5 w-5 text-sky-400" />
                    </div>
                </div>
            </div>

            <Animation />
            </div>
        </>
    );
};
