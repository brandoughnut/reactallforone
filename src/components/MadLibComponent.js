import React from "react";
import "../App.css";
import { useState } from 'react'
import logo from '../assets/submitBtn.png';
import { MadLib } from "../services/DataService.js";

export default function MadLibComponent() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');
    const [input8, setInput8] = useState('');
    const [input9, setInput9] = useState('');
    const [input10, setInput10] = useState('');

    const [result, setResult] = useState('');

    const getResult = async() => {
        if(input1 === '' || input2 === '' || input3 === '' || input4 === '' || input5 === '' || input6 === '' || input7 === '' || input8 === '' || input9 === '' || input10 === ''){
            setResult('Please enter valid response!!!!');
        }else{
            const promise = await MadLib(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10);
            setResult(promise); 
        }   
    }

  return (
    <div className="RobotoFont">
      
      <div className="text-center mb-8 sm:mb-16">
        <p
          className="text-[30px] sm:text-[75px] lg:text-[100px] mb-8 sm:mb-16"

        >
          Mad Lib
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center">
        <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter a gender:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput1(e.target.value)} value={input1}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div

              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"
          >
            Please enter a name:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput2(e.target.value)} value={input2}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div

              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center">
        <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter an age:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput3(e.target.value)} value={input3}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div
              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter a color:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput4(e.target.value)} value={input4}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div
              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center">
        <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter a pronoun:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput5(e.target.value)} value={input5}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div

              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter a food:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput6(e.target.value)} value={input6}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div

              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center">
        <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"
          >
            Please enter a job:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput7(e.target.value)} value={input7}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required
              />
            </div>
            <div
              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter an adjective:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput8(e.target.value)} value={input8}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div
              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center">
        <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter an adjective:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput9(e.target.value)} value={input9}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <div
              className="opacity-0 sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p
            className="text-[15px] sm:text-[50px]"

          >
            Please enter a noun:
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setInput10(e.target.value)} value={input10}
                className="p-2.5 block w-[139px] sm:w-[460px] text-[15px] py-[2.5px] sm:text-[50px] rounded-lg sm:rounded-2xl border-none sm:py-[19px]"
                required

              />
            </div>
            <button
              onClick={() => {
                getResult()
                setInput1('')
                setInput2('')
                setInput3('')
                setInput4('')
                setInput5('')
                setInput6('')
                setInput7('')
                setInput8('')
                setInput9('')
                setInput10('')
                }}
              type="submit"
              className="sm:p-2.5 ms-3 sm:ms-5 text-sm font-medium text-white focus:outline-none"
            >
              <img
                className="h-[29px] sm:h-auto"
                src={logo}
                alt="Submit button"
              />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      

      <div className="text-center pb-52">
        <p className="text-[15px] sm:text-[50px]">
          {result}
        </p>
      </div>

    </div>
  )
}
