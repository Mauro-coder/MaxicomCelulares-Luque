// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({producto}) => {
  const [compra, setCompra] = useState(false)
  const {addToCart}= useContext(CartContext)
  const onAdd = (cantidad) => {
        setCompra(true)
        addToCart(producto, cantidad)
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Agregaste al carrito ${cantidad} productos`,
          showConfirmButton: false,
          timer: 1500
        });
    }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle de: {producto.name}</h2>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>
        <p>${producto.price},00</p>
  {compra
   ? <div  style={{
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px"
  }}>
    <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
      <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link>
      </div>
      : <ItemCount stock={producto.stock} initial={0} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail