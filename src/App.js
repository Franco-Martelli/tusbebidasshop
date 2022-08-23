import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/NavBar';
import ItemDeteailContainer from './Componentes/ItemDeteailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemDeteailContainer/>
    </div>
  );
}

export default App;
