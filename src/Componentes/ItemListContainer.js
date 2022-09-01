import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Diseños/Card.css'
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from "../Utils/firestoreFetch";

const ItemListContainer = () => {

  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);
  
    return(
        <>
    
          <div>
            <Itemlist items={datos} />
          </div>
  

        </>
        );
      }

export default ItemListContainer;
