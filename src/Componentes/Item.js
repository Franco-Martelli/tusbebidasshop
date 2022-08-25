import React from "react";
import './Diseños/Card.css'


const Item = ({ prod }) => {

  return (
    <div className='Card'>
    <img src={prod.thumbnailUrl} className='ImgCard' />
    <div className='Text'>
        <h5> {prod.title}  </h5>
        <p>MAS DETALLES</p>
        <h6> $ {prod.precio}</h6>
    </div> 
    </div>
  );
};

export default Item