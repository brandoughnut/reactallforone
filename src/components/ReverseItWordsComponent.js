import React from "react";
import "../App.css";
import { useState } from 'react'
import logo from '../assets/submitBtn.png';
import { ReverseItWords } from "../services/DataService";

export default function ReverseItWordsComponent() {

    const [input, setInput] = useState('');

    const [result, setResult] = useState('');

    const getResult = async() => {
        if(input === ''){
            setResult('Please enter valid response!!!!');
        }else{
            const promise = await ReverseItWords(input);
            setResult(promise); 
        }   
    }

  return (
    <div>
      
      <div className="text-center mb-8 sm:mb-16 RobotoFont">
        <p className="text-[30px] sm:text-[100px] mb-8 sm:mb-16">Reverse It Words</p>
        <p className="text-[15px] sm:text-[50px]">Please enter a word:</p>
      </div>

        <div className="flex justify-center mb-8 sm:mb-16 ">

<div className="flex items-center">   
    <div className="relative">
    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
    </div>
    <button onClick={() => {
        getResult()
        setInput('')
        }} className="sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white  focus:outline-none ">
    <img className="h-[29px] sm:h-auto" src={logo} alt="Submit button"/>
        <span className="sr-only">Search</span>
    </button>
  </div>

      </div>

      <div className="text-center pb-52">
        <p className="text-[15px] sm:text-[50px] RobotoFont">{result}</p>
      </div>

    </div>
  )
}
