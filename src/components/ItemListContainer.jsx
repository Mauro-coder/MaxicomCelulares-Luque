// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getProducts } from "../mock/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemListContainer = ({ greeting, texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productosId } = useParams();
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (productosId) {
          setProducts(
            res.filter((producto) => producto.category === productosId)
          );
        } else {
          setProducts(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [productosId]);

  console.log(products);

  return (
    <div className="itemContainer">
      <h1 className="text-center">{greeting}</h1>
      <p className="pTexto">{texto}</p>
      {loading ? <Loader/>: <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
