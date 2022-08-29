import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import CustomFetch from '../Utils/CustomFetch';
const { Productos } = require ('../Utils/Products');

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    
    useEffect(() => {
        CustomFetch(2000, Productos[8])
        .then(result => setProducts(result))
        .catch(err => console.log(err))
      }, [])
  return <ItemDetail item={products} />;
};

export default ItemDetailContainer;