// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({producto}) => {
  const [compra, setCompra] = useState(false)
  const {addToCart}= useContext(CartContext)
  const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} productos`)
        setCompra(true)
        // let cartItem = {
        //   name: producto.name,
        //   img: producto.img,
        //   price: producto.price,
        //   stock: producto.stock,
        //   id: producto.id
        // }
        //   addToCart(cartItem, cantidad)
        addToCart(producto, cantidad)
    }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle de: {producto.name}</h2>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>
        <p>${producto.price},00</p>
  {compra
   ? <div>
    <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
      <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link>
      </div>
      : <ItemCount stock={producto.stock} initial={0} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail