// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({prod}) => {
  const {removeItem} = useCart()
  return (
    <div className="cart-item">
      <img src={prod.img} alt={prod.name} />
      <span><b>Tipo de Producto:</b> {prod.name}</span>
      <span><b>Cantidad:</b> {prod.cantidad}</span>
      <span><b>Precio individual:</b> ${prod.price},00</span>
      <span><b>Precio final:</b> ${prod.cantidad * prod.price},00</span>
      <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>X</button>
    </div>
  );
};


export default CartItem
