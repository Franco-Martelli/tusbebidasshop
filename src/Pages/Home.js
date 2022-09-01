import "../App";
import NavBar from "../Componentes/NavBar";
import Cart from "../Componentes/Cart";
import ItemDetailContainer from "../Componentes/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../Componentes/ItemListContainer";
import CartContextProvider from "../Context/CartContext";

const Home = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Home;