import { useState } from "react"
import React from 'react'
import './Diseños/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = ({stock=5, onAdd }) => {

const [counter, setCounter] = useState (1)

const subtract = () =>{
  if(counter > 1){
    setCounter(counter -1)
  }
}

const add = () => {
  if(counter < stock){
    setCounter(counter +1)
  }
}

const AgregarCantidad = () => {
  onAdd(counter);
};

  return (
    <>
    <div className='Buttons'>
        <button className="btn btn-primary" onClick={subtract}> - </button>
        <p className="counter"> {counter} </p>
        <button className="btn btn-primary" onClick={add}> + </button>
    </div>
    <button  className="btn btn-primary" style={{height: 39}} onClick={AgregarCantidad}>AGREGAR AL CARRITO</button>
    </>
  )
}

export default ItemCount; 