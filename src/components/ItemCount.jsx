/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount]= useState(initial)
    const sumar = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const restar = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    const onAddHandler = () =>{
        if(stock !== 0){
            onAdd(count)
        }
    }
  return (
    <div>
        <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span className='btn'>{count}</span>
            <button className='btn btn-success' onClick={sumar}>+</button>
        </div>
       <button className='btn btn-primary' onClick={onAddHandler} disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount