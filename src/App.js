import "./App.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import HomeComponent from "./components/HomeComponent";
import SayHelloComponent from "./components/SayHelloComponent";
import Magic8BallComponent from "./components/Magic8BallComponent";
import ReverseItNumbersComponent from "./components/ReverseItNumbersComponent";
import ReverseItWordsComponent from "./components/ReverseItWordsComponent";
import RestaurantPickerComponent from "./components/RestaurantPickerComponent";
import Add2NumbersComponent from "./components/Add2NumbersComponent";
import GreaterOrLessComponent from "./components/GreaterOrLessComponent";
import AskingQuestionsComponent from "./components/AskingQuestionsComponent";
import OddOrEvenComponent from "./components/OddOrEvenComponent";
import MadLibComponent from "./components/MadLibComponent";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <BrowserRouter>
    <div className="BG min-h-screen">

<div className="hidden sm:block">

          <div className="flex justify-center py-14">
          <Button color="bg-[#EE8096]" className="block text-black bg-[#EE8096] font-medium rounded-xl text-sm px-4 py-7 text-center RobotoFont" onClick={() => setOpenModal(true)}>
            <div className="text-[50px]">Page List</div>
            </Button>
            
          </div>

          <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header className="bg-[#EE8096]" />
        <Modal.Body className="text-center relative p-4 w-full max-h-full bg-[#EE8096]">
          <div className="">

                <div className="text-center pb-10 RobotoFont">
                  <Link to={'/'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Home</p>
                  </Link>
                  <Link to={'SayHello'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Say Hello</p>
                  </Link>
                  <Link to={'Add2Numbers'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Add 2 Numbers</p>
                  </Link>
                  <Link to={'AskingQuestions'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Asking Questions</p>
                  </Link>
                  <Link to={'GreaterOrLess'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Greater or Less</p>
                  </Link>
                  <Link to={'MadLib'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Mad Lib</p>
                  </Link>
                  <Link to={'OddOrEven'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Odd or Even</p>
                  </Link>
                  <Link to={'ReverseItWords'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Reverse It Words</p>
                  </Link>
                  <Link to={'ReverseItNumbers'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Reverse It Numbers</p>
                  </Link>
                  <Link to={'RestaurantPicker'}
                    className="text-[25px]"
                  >
                    <p className="mb-4">Restaurant Picker</p>
                  </Link>
                  <Link to={'Magic8Ball'}
                    className="text-[25px]"
                  >
                    <p>Magic 8 Ball</p>
                  </Link>
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

    <Routes>

      <Route path='/' element={ <HomeComponent/> }/>
      <Route path='SayHello' element={ <SayHelloComponent/> }/>
      <Route path='Add2Numbers' element= { <Add2NumbersComponent/> }/>
      <Route path='AskingQuestions' element= { <AskingQuestionsComponent/> }/>
      <Route path='GreaterOrLess' element= { <GreaterOrLessComponent/> }/>
      <Route path='MadLib' element= { <MadLibComponent/> }/>
      <Route path='Magic8Ball' element={ <Magic8BallComponent/> }/>
      <Route path='OddOrEven' element= { <OddOrEvenComponent/> }/>
      <Route path='RestaurantPicker' element= { <RestaurantPickerComponent/> }/>
      <Route path='ReverseItNumbers' element={ <ReverseItNumbersComponent/> }/>
      <Route path='ReverseItWords' element={ <ReverseItWordsComponent/> }/>

    </Routes>


    </div>
    

      
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
