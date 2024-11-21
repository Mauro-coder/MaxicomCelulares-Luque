// eslint-disable-next-line no-unused-vars
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} productos`)
    }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle de: {producto.name}</h2>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>
        <p>${producto.price},00</p>
        <ItemCount stock={producto.stock} initial={0} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail