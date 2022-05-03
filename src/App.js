import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheetContext } from 'styled-components';

import './App.css';

function App() {

  const [number, setNumber] = useState(8);
  const inputRef            = useRef(null);
  const resultRef           = useRef(null);
  const [txt, setTxt]       = useState('')
  

  useEffect(() => {
    alert('Cambio el estado de number');
  },[number]);

  
  const makeThings = () => {
    resultRef.current.innerHTML = inputRef.current.value;
    alert(inputRef.current.value);
  }

  const changeNum = () => {
    
    setNumber(5);
  }

  const textChange = (evento) => {
    setTxt(evento.target.value);

  }


  return (

    <div>
     
      <input type="text" ref={inputRef}/>
      <button onClick={makeThings}> Imprimir en pantalla </button>
      <div ref={resultRef}></div>
     
      <button onClick={() => changeNum()}> Cambiar Número </button>
      {number}

      <input type="text" onChange={(evento) => textChange(evento)}/>
      {txt}

    

    </div>

  );


}

export default App;
