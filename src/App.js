import { useRef } from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  
  const makeThings = () => {
    resultRef.current.innerHTML = inputRef.current.value;
    alert(inputRef.current.value);
   
  }
  return (

    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={makeThings}>Hacer Cosas</button>
   
      <div ref={resultRef}></div>

    </div>

  );


}

export default App;
