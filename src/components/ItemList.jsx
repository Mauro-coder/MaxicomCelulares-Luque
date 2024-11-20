// eslint-disable-next-line no-unused-vars
import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div className="cardsContainer">
            {products.map((product)=> <Item product= {product} key={product.id}/>)}
        </div>
    )
}

export default ItemList