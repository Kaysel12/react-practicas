// Lo primero que se necesita para que la 
// fuente del single page funcione es lo siguiente:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// Importaciones de componentes.
// import PrimerComponente from './componentes/03-primer-componente';
// import { ImpresionVariable } from './componentes/05-impresion-variables';
// import ColocarEstilos from './componentes/06-colocar-estilos';
// import {PropsComunication, PropsComunication2} from './componentes/07-props';
// import PropTypeExample from './componentes/08-propTypes';
import PropTypeExample from './componentes/09-defaultProps';
import DefaultPropsExample from './componentes/09-defaultProps';
import ContadorApp from './componentes/10-contadorApp';
import TareaUseState from './componentes/12-tarea.jsx'

// Creamos el creatRoot para que nos muestre nuestra aplicacion y los componentes
// que vamos agregando.

// El React.StricMode sirve para que la aplicacion nos muestre los errores.
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
    {/* <PrimerComponente /> */}
    {/* <ImpresionVariable /> */}
    {/* <ColocarEstilos /> */}
    {/* <PropsComunication2 title="Props" comment="Pasando props regulares"/> */}
    {/* <PropTypeExample saludo="hola" pregunta="estas bien?"/> */}
    {/* <DefaultPropsExample /> */}
    {/* <ContadorApp /> */}
    <TareaUseState />
    </React.StrictMode>
)