import React from "react";
import "../App.css";
import { useState } from 'react'
import logo from '../assets/submitBtn.png';
import { AskingQuestions } from "../services/DataService.js";

export default function AskingQuestionsComponent() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const [result, setResult] = useState('');

    const getResult = async () => {
        if(input1 === '' || input2 === ''){
            setResult('Please enter valid response!!!!');
        }else{
            const promise = await AskingQuestions(input1, input2);
            setResult(promise);
        }
    }

  return (
    <div>
      
      <div className="text-center mb-8 sm:mb-16 RobotoFont">
        <p className="text-[30px] sm:text-[100px] mb-8 sm:mb-16">Asking Questions</p>
        <p className="text-[15px] sm:text-[50px]">Hello, what is your name?</p>
      </div>

        <div className="flex justify-center mb-8 sm:mb-16 ">

<div className="flex items-center">   
    <div className="relative">
    <input onChange={(e) => setInput1(e.target.value)} value={input1} type="text" className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
    </div>
    <div type="submit" className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white  focus:outline-none ">
        <img className="h-[29px] sm:h-auto" src={logo} alt="Submit button"/>
        <span className="sr-only">Search</span>
    </div>
  </div>

      </div>

      <div className="text-center mb-8 sm:mb-16 RobotoFont">
      <p className="text-[15px] sm:text-[50px]">What time did you wake up?</p>
      </div>

      <div className="flex justify-center mb-8 sm:mb-16 ">

<div className="flex items-center">   
    <div className="relative">
    <input onChange={(e) => setInput2(e.target.value)} value={input2} type="text" className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
    </div>
    <button onClick={() => {
        getResult()
        setInput1('')
        setInput2('')
        }} type="submit" className=" sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white  focus:outline-none ">
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
