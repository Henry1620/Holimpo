//import logo from './logo.svg';
import './App.css';
import Menu from './componentes/menu'
import Carrusel from './componentes/carrusel'
import Contenido from './componentes/contenido'

function App() {
  return (
    <div className="container-fluid">
     <Menu/>
     <Carrusel/>
     <Contenido/> 
     
    </div>
  );
}

export default App;
