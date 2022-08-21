import './App.css';
import ItemListContainer from './Containers/ItemListContainer';
import NavBar from './Componentes/NavBar';
import ItemDeteailContainer from './Containers/ItemDeteailContainer';

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
