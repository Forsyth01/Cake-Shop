
import './App.css';
import * as React from 'react';
import Home from './Component/Home';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Nav from './Log/Nav';




function App() {
  return (
    <div className="App bg-gray-100 text-gray-700">
        <div className="m-auto w-[95%] py-5">
         {/* <Header/>  */}

        <div className=" md:flex my-5 gap-5">
        <div>
        <Navbar/>
        </div>
        <Home />
        </div>

    </div>
    </div>
  );
}

export default App;
