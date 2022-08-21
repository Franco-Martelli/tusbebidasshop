import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../Componentes/ItemCount';
import ItemList from '../Componentes/ItemList';


const ItemListContainer = () => {
  return (
    <div>   
    <div className="card">
     <ItemList/>
     <ItemCount 
     initial={1}
     stock={5}
     />
    </div>
    </div>
  )
}

export default ItemListContainer;
