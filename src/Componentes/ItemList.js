import React from 'react'

const ItemList = (props) => {
  return (
    <div>
        <img src={props.img} className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">{props.title}</h5>
       <p className="card-text">{props.description}</p>
      <a href="p" className="btn btn-primary">Go somewhere</a>
     </div>
    </div>
  )
}

export default ItemList