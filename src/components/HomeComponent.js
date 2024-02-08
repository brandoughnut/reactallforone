import React from "react";
import "../App.css";
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

export default function HomeComponent() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="BG min-h-screen">
        <div className="hidden sm:block">

          <div className="flex justify-center py-14">
          <Button color="bg-[#EE8096]" className="block text-black bg-[#EE8096] font-medium rounded-2xl text-sm px-5 py-8 text-center RobotoFont" onClick={() => setOpenModal(true)}>
            <div className="text-[50px]">Page List</div>
            </Button>
            
          </div>

          <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header className="bg-[#EE8096]" />
        <Modal.Body className="text-center relative p-4 w-full max-h-full bg-[#EE8096]">
          <div className="">

                <div className="text-center pb-10 RobotoFont">
                  <a
                    href="index.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Home</p>
                  </a>
                  <a
                    href="./pages/SayHello.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Say Hello</p>
                  </a>
                  <a
                    href="./pages/Add2Numbers.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Add 2 Numbers</p>
                  </a>
                  <a
                    href="./pages/AskingQuestions.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Asking Questions</p>
                  </a>
                  <a
                    href="./pages/GreaterorLess.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Greater or Less</p>
                  </a>
                  <a
                    href="./pages/MadLib.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Mad Lib</p>
                  </a>
                  <a
                    href="./pages/OddorEven.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Odd or Even</p>
                  </a>
                  <a
                    href="./pages/ReverseItWords.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Reverse It Words</p>
                  </a>
                  <a
                    href="./pages/RestaurantPicker.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Reverse It Numbers</p>
                  </a>
                  <a
                    href="./pages/RestaurantPicker.html"
                    className="text-[25px]"
                  >
                    <p className="mb-4">Restaurant Picker</p>
                  </a>
                  <a
                    href="./pages/Magic8Ball.html"
                    className="text-[25px]"
                  >
                    <p>Magic 8 Ball</p>
                  </a>
                </div>

            
          </div>
        </Modal.Body>
      </Modal>

        </div>

        <div className="block sm:hidden">
          <div className="flex flex-wrap items-center justify-end mx-auto p-4 mb-16">
            <Button color="bg-[#EE8096]" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm bg-[#EE8096] rounded-xl" onClick={() => setOpenModal(true)}>
        <button
                data-collapse-toggle="navbar-hamburger"
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm bg-[#EE8096] rounded-xl"
                aria-controls="navbar-hamburger"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
          </Button>
          </div>
        

        </div>

        <div className="text-center RobotoFont">
          <p
            className="text-[75px] sm:text-[125px] lg:text-[200px]"
          >
            All For One
          </p>

          <p
            className="text-[75px] sm:text-[125px] lg:text-[200px] text-white"
          >
            All For One
          </p>

          <p
            className="text-[75px] sm:text-[125px] lg:text-[200px]"
          >
            All For One
          </p>
        </div>
      </div>
    </div>
  );
}
