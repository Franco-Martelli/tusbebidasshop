import React from 'react'
import NavBar from '../Componentes/NavBar'
import ItemListContainer from '../Containters/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route  path='/' element={<ItemListContainer />}/>
        <Route  path='/category/:id' element={<ItemListContainer />}/>
        <Route  path='/item/:id' element={<ItemListContainer />}/>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default Home;