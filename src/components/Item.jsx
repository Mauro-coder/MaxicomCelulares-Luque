// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const item = ({product}) => {
  return (
    <div>
  <img src={product.img} alt={product.name}/>
  <div >
    <h5>{product.name}</h5>
    <p>${product.price},00</p>
    <Link to={`/item/${product.id}`} className="btn btn-primary">Ver más</Link>
        </div>
</div>)}

export default item