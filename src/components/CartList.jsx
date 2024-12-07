// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
    const clearCart = () =>{
      Swal.fire({
        title: "Seguro quieres borrar todo el carrito?",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
          clear()
        } else if (result.isDenied) { /* empty */ }
      });
    }
  return (
    <div>
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
        <span>Total a pagar: ${cartTotal()},00</span>
        <div  style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2rem',
            }}>
            <button className='btn btn-danger' onClick={clearCart}> Borrar Carrito</button>
            <Link className='btn btn-success' to={'/checkout'}>Terminar Compra</Link>
        </div>
    </div>
  )
}

export default CartList