// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const item = ({product}) => {
  return (
    <div className="card" style={{padding:'20px', margin:'20px'}}>
  <img src={product.img} className="card-img-top" alt={product.name}/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">${product.price},00</p>
    <Link to={`/item/${product.id}`} className="btn btn-primary">Ver más</Link>
        </div>
</div>)}

export default item