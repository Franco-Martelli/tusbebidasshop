import './App.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Componentes/Cart';
import NavBar from './Componentes/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
