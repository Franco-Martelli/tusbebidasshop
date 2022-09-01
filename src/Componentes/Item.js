import React from "react";
import './Diseños/Card.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




const Item = ({ prod, id }) => {

  return (
    <div>
    <div className='Card'>
    <img src={prod.image} className='ImgCard' />
    <div className='card-body' style={{textAlign: 'center'}}>
        <h5 className="card-title" style={{paddingBottom: 15, textAlign: 'center'}}> {prod.product_name}  </h5>
        <Link to={`/item/${id}`} style={{ textDecoration: "none", paddingBottom: 30}}>    
        <p className="btn btn-primary"  >MAS DETALLES</p>
        </Link>
        <h6 > $ {prod.price}</h6>
    </div> 
    </div>
    </div>
  );
};

export default Item