// import React from 'react'
import './App.css';
// import * as Bootstrap from 'bootstrap'
import Header from './components/Header';
import Navbar from './components/NavBar';
// import ProgChart from './components/ProgChart2'
import ProgChart from './components/ProgChart'



function App() {

  return (
    <div className="App">
      <header className="App-header ">
        <div>
          <Navbar></Navbar>
        </div>

        <div className='container'>
          <div className='row'>
            <Header></Header>
          </div>
          <div className='row chart1'>
            <div className=''>
              <div className=''>
                <ProgChart></ProgChart>

              </div>
            </div>
          </div>

          {/* <ProgChart></ProgChart> */}

        </div>

        <div>
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        </div>

      </header>


    </div>
  );
}

export default App;
