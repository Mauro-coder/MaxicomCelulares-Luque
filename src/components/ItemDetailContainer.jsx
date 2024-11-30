// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState (false)
    const {id} = useParams()

    useEffect(()=>{
      setLoading(true)

      const CollectionProd = collection(db, "productos")

      const docRef = doc(CollectionProd, id)

      getDoc(docRef)
      .then((res)=> setProducto({id: res.id, ...res.data()}))
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