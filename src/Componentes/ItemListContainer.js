import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Diseños/Card.css'
import CustomFetch from '../Utils/CustomFetch';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
const { Productos } = require ('../Utils/Products');


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {id} = useParams()
    
    useEffect(() => {
      if(id === undefined){
        CustomFetch(1000, Productos)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
      }else {
        CustomFetch(4000, Productos.filter(item => item.categoryId === parseInt(id)))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
      }
      }, [id])
    
  
    return(
        <>
        <div className='ContainerCard'>
        
                <Itemlist items={products}/>             
              </div>
        </>
        );
      }

export default ItemListContainer;
