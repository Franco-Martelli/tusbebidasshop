import { useState } from "react"
import React from 'react'
import './Diseños/Card.css'

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
        <button onClick={subtract}> - </button>
        <p> {counter} </p>
        <button onClick={add}> + </button>
    </div>
    <button onClick={AgregarCantidad}>AGREGAR AL CARRITO</button>
    </>
  )
}

export default ItemCount; 