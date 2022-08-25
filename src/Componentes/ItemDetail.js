import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
  return (
    <>
    {
      item.thumbnailUrl
      ?
      <>
      <div className='ContainerCard'>
        <img src={item.thumbnailUrl} className='ImgCard' alt='' />
        <div className='Text'>
            <h5> {item.title}  </h5>
            <p>MAS DETALLES</p>
            <h6> $ {item.precio}</h6>
            </div>   
            </div>
            <ItemCount/>
      </>
            : <p className="pLoading">LOADING</p>
      }
    </>
  )
}

export default ItemDetail
