import React from "react";
import "../App.css";
import logo from '../assets/submitBtn.png';

export default function Add2NumbersComponent() {
  return (
    <div>
      
      <div className="text-center mb-8 sm:mb-16">
        <p className="text-[30px] sm:text-[75px] lg:text-[100px] mb-8 sm:mb-16 RobotoFont">Add 2 Numbers</p>
      </div>

      <div className="flex justify-center mb-8 sm:mb-16 ">

        <div className="flex flex-col justify-center me-4 sm:me-8">
            <p className="text-[15px] sm:text-[50px] RobotoFont">Enter number:</p>
        </div>
        
<div className="flex items-center">   
    <div className="relative">
        <input type="text" className=" p-2.5 block w-[43px] sm:w-[117px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
    </div>
    <div className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white  focus:outline-none ">
        <img className="h-[29px] sm:h-auto" src={logo} alt="Submit button"/>
        <span className="sr-only">Search</span>
    </div>
  </div>

      </div>

      <div className="flex justify-center mb-8 sm:mb-16 ">

        <div className="flex flex-col justify-center me-4 sm:me-8">
            <p className="text-[15px] sm:text-[50px] RobotoFont">Enter number:</p>
        </div>
        
<div className="flex items-center">   
    <div className="relative">
        <input type="text" className=" p-2.5 block w-[43px] sm:w-[117px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px] RobotoFont" required/>
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
