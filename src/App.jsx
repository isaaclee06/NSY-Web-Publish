import React from 'react';
import Test from './components/Test'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar';






function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <NavigationBar/>

      </div>
      <Test />
    </div>
  );
}


export default App;
