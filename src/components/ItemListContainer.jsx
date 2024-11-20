// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import { getProducts } from '../mock/data'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (false)
    console.log('ItemListContainer')

    //Por el momento
    const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} productos`)
    }

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> setProducts(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    console.log(products)

    return (
        <div className="itemContainer">
            <h1 className="h1Greeting">{greeting}</h1>
            <p className="pTexto">{texto}</p>
            {loading ? <p>Cargando...</p> : products.map((product)=> <p key={product.id}>{product.name}</p>)}
            <ItemCount stock={12} onAdd ={onAdd}/>
        </div>
    )
}

export default ItemListContainer 