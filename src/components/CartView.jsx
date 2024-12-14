// eslint-disable-next-line no-unused-vars
import React from 'react'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import { useCart } from '../context/CartContext'

const CartView = () => {
    const {cart} = useCart()
    return (
        <div className="cart-container">
          {!cart.length ? (
            <EmptyCart />
          ) : (
            <div>
              <h2>Tu Carrito</h2>
              <CartList />
            </div>
          )}
        </div>
      );
    };
export default CartView