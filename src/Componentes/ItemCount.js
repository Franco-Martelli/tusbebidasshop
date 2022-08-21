import { useState } from "react"
import React from 'react'

const ItemCount = ({initial, stock }) => {

const [counter, setCounter] = useState (initial)

const subtract = () =>{
  if(counter > initial){
    setCounter(counter -1)
  }
}

const add = () => {
  if(counter < stock){
    setCounter(counter +1)
  }
}

  return (
    <div>
        <button onClick={subtract}> - </button>
        <p> {counter} </p>
        <button onClick={add}> + </button>
    </div>
  )
}

export default ItemCount; 