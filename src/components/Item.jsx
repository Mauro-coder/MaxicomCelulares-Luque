// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const item = ({product}) => {
  return (
    <div className="card" >
        <img src={product.img} className="cardimage" alt={product.name}/>
        <div className="card-body">
            <h5 className="card-content">{product.name}</h5>
            <p className="card-content">${product.price}</p>
            <Link className="btn btn-primary" to={`/item/${product.id}`}>Ver mas</Link>
        </div>
</div>)}

export default item