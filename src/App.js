import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import './App.css';

function App() {

  const [number, setNumber] = useState(8);
  const [txt,    setTxt   ] = useState('')
  const inputRef            = useRef(null);
  const resultRef           = useRef(null);
  
  
/* SE AUTO LLAMA CUANDO CAMBIA EL NUMBER*/
  useEffect(() => {
    alert('Cambio el estado de number');
  },[number]);

/* RECOJO EL VALOR DEL INPUT Y LO MUESTRO EN PANTALLA*/ 
  const makeThings = () => {
    resultRef.current.innerHTML = inputRef.current.value;
    alert(inputRef.current.value);
  }

/* CAMBIAMOS LOS VALORES DE ANTES CON EL USESTATE*/
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
