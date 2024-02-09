import React from "react";
import "../App.css";
import logo from '../assets/submitBtn.png';

export default function AskingQuestionsComponent() {
  return (
    <div>
      
      <div className="text-center mb-8 sm:mb-16 RobotoFont">
        <p className="text-[30px] sm:text-[100px] mb-8 sm:mb-16">Asking Questions</p>
        <p className="text-[15px] sm:text-[50px]">Hello, What is your name?</p>
      </div>

        <div className="flex justify-center mb-8 sm:mb-16 ">

<div className="flex items-center">   
    <div className="relative">
    <input type="text" className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
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
    <input type="text" className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
    </div>
    <button type="submit" className=" sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white  focus:outline-none ">
        <img className="h-[29px] sm:h-auto" src={logo} alt="Submit button"/>
        <span className="sr-only">Search</span>
    </button>
  </div>

      </div>



      <div className="text-center pb-52">
        <p className="text-[15px] sm:text-[50px] RobotoFont"></p>
      </div>

    </div>
  )
}
