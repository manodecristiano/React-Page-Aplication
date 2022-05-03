import React from 'react';

/*TRAEMOS TODOS LOS props Y LOS UTILIZAMOS COMO QUERAMOS*/
export const ComponenteExtra = props =>

 <div>
  Añadimos al final el primera prop {props.param} 
  y ahora añadimos  el segundo prop {props.param2}
 
 <p>{props.children}</p>
 
 </div>


export const ComponenteExtra2 = () => <div>Exportando Componente Extra 2</div>;
 

export default () => <div>Exportando por Default</div>;
