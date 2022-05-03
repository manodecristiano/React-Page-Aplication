import React from 'react';

import PorDefecto,{ComponenteExtra,ComponenteExtra2} from './ComponenteExtra';

const Componente =() => {
  
    return (
    <div>

    <ComponenteExtra param="AMOR " param2="ODIO"> 
     Esto es el Children de ComponenteExtra
    </ComponenteExtra>
     

    <ComponenteExtra2> Texto 2</ComponenteExtra2>
    <PorDefecto/>       

    </div>
    )

};








export default Componente;