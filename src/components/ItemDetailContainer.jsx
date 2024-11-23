// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { getOneProduct} from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState (false)
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
      setLoading(true)
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    },[id])
  return (
    <div>
        {loading ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer