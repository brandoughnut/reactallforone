import "./App.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={ <HomeComponent/> }></Route>
      <Route path='SayHello'></Route>
      <Route path='Add2Numbers'></Route>
      <Route path='AskingQuestions'></Route>
      <Route path='GreaterOrLess'></Route>
      <Route path='MadLib'></Route>
      <Route path='Magic8Ball'></Route>
      <Route path='OddOrEven'></Route>
      <Route path='RestaurantPicker'></Route>
      <Route path='ReverseItNumbers'></Route>
      <Route path='ReverseItWords'></Route>

    </Routes>

      
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
