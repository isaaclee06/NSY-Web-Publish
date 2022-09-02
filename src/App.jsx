import React from 'react';
import Test from './components/Test'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import Events from './components/Events';


import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Router,
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Router> */}
        <div className='gradient__bg'>
          <NavigationBar />
        </div>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/events' element={<Events />} />
          </Routes>
        </div>
      {/* </Router> */}
      </BrowserRouter>
    </div>
  );
}


export default App;
