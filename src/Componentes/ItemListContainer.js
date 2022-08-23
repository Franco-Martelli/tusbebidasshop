import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Diseños/Card.css'
import CustomFetch from '../Utils/CustomFetch';
import Itemlist from './ItemList';
const { Productos } = require ('../Utils/Products');


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        CustomFetch(4000, Productos)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
      }, [])
    
  
    return(
        <>
        <div className='ContainerCard'>
        
                <Itemlist items={products}/>             
              </div>
        </>
        );
      }

export default ItemListContainer;
