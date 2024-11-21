// eslint-disable-next-line no-unused-vars
import React from 'react'

const item = ({product}) => {
  return (
    <div className="card" >
        <img src={product.img} className="cardimage" alt={product.name}/>
        <div className="card-body">
            <h5 className="card-content">{product.name}</h5>
            <p className="card-content">${product.price}</p>
            <a href="#" className="btn btn-primary">Ver mas</a>
        </div>
</div>)}

export default item