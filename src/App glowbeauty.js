import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
   const [glowbeauty, setGlowbeauty] = useState(0);
   const [makeup, setMakeup] = useState(0);
    useEffect(() => {
  alert("I am useeffect");

},[glowbeauty]);
useEffect(() => {
  alert   ("I am useeffect");

},[makeup]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Glowbeauty: {glowbeauty}</h1>
        <button onClick={()=> setGlowbeauty(glowbeauty + 1)}>increment</button>
        <h1>Makeup: {makeup}</h1>
        <button onClick={() => setMakeup (makeup - 1)}>decrement</button>
      </header>
    </div>
  );
}

export default App;
