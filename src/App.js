import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let [appData, setAppData] = useState()

  function getAppData(e) {
    e.preventDefault();

    if (window.App) {
      setAppData(window.App.getAppData())    
    } else {
      setAppData("Device not found")    
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esse dado veio do APP: {appData}
        </p>   
        <button onClick={(e) => getAppData(e)}>Get AppData</button>              
      </header>     
      
    </div>
  );
}

export default App;
