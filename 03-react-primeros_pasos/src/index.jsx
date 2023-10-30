// Lo primero que se necesita para que la 
// fuente del single page funcione es lo siguiente:
import React from 'react';
import ReactDOM from 'react-dom/client';

// import PrimerComponente from './componentes/03-primer-componente';
import { ImpresionVariable } from './componentes/05-impresion-variables';

// Creamos el creatRoot para que nos muestre nuestra aplicacion y los componentes
// que vamos agregando.

// El React.StricMode sirve para que la aplicacion nos muestre los errores.
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
    {/* <PrimerComponente /> */}
    <ImpresionVariable />
    </React.StrictMode>
)