// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";


const ItemListContainer = ({ greeting, texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productosId } = useParams();

  useEffect(()=>{
    setLoading(true)

    const productsCollection = productosId 
    ? query(collection(db, "productos"), where("category", "==", productosId)) 
    : collection(db, "productos")

    getDocs(productsCollection)
    .then((res)=> {
      const list = res.docs.map((product)=>{
        return{
          id: product.id,
          ...product.data()
        }
      })
      setProducts(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[productosId])


  // const addData = () =>{
  //   const collectionToAdd = collection(db, "productos")
  //   productosDB.map((item)=> addDoc(collectionToAdd, item))
  // }

  return (
    <div className="itemContainer" style={{height:'100%', paddingBottom:'60px', boxSizing:'border-box'}}>
      {/* <button onClick={addData}>Agregar a Firebase</button> */}
      <h1 className="text-center">{greeting}: <span style={{textTransform:'capitalize', color:'grey'}}>{productosId}</span></h1>
      <p className="pTexto">{texto}</p>
      {loading ? <Loader/>: <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
