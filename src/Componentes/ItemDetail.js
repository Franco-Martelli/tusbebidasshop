import { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { CartContext } from "../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Diseños/Cart.css'

const ItemDetail = ({prod}) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext); 

  const onAdd = (quantity) => {
    setItemCount(quantity);
    test.addItem(prod, quantity);
  };

  return (
    <>
    {
      prod && prod.image ? (

      <>
      <div className='ContainerCard'>
        <img src={prod.image} className='ImgCard' alt={prod.product_name} />
        <div className='Text'>
            <h5 className="card-title" style={{paddingBottom: 15, textAlign: 'center'}}> {prod.product_name}  </h5>
            <p className="parrafo">{prod.description}</p>
            <p> $ {prod.price}</p>
            <p> Stock disponible: {prod.stock}</p>
            </div>   
            {itemCount === 0 ? (
                <ItemCount
                  stock={prod.stock}
                  initial={itemCount}
                  onAdd={onAdd}
                />
              ) : (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button className="btn btn-primary" style={{ cursor: "pointer" }}>← Continuar comprando </button>
                </Link>
              )}
              {itemCount === 0 ? (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button  className="btn btn-primary" style={{ cursor: "pointer" }}>← volver al home</button>
                </Link>
              ) : (
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <button className="btn btn-primary" style={{ cursor: "pointer" }}>ir al carrito → </button>
                </Link>
              )}
            </div>
      </>
          ) : (
              <>              
               <p className="pLoading">LOADING</p>
              </>
            )}
    </>
  );
}

export default ItemDetail
