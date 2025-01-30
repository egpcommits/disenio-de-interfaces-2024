import './App.css';
import Iterador from './Iterador.js';
import Selector from './Selector.js';
import Sumar from './Sumar.js';
import Contador from './Contador.js';
import Galeria from './Galeria.js';

function App() { //El nombre de la funcion tiene que ser igual que el nombre del archivo
  return ( //el return, si tiene más de un objeto, da error. Si tenemos varios, hay que usar un contenedor
    <> {/*contenedor*/}

      {/*se crea un objeto iterador. Se pueden crear todos los que se quiera*/}
      <Iterador/> 

      <br/><br/>

      {/*se crea un objeto selector. Se pueden crear todos los que se quiera*/}
      <Selector/>

      <br/><br/>
      <Sumar/>

      <br/><br/>
      <Contador/>

      <br/><br/>
      <Galeria/>
    </>
  );
}

export default App;
