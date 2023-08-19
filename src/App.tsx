import React,{ useState } from 'react'
import './App.css';
import { Transition } from '@headlessui/react'

function App() {

  const [isShowing, setIsShowing] = useState(true)





  return (
    <div className="App">
      <header className="App-header">

          <h1>hello</h1>
    
        <button
        className="bg-sky-500 hover:bg-sky-700"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        >
          Toggle
        </button>
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
      </header>
    </div>
  );
}

export default App;
