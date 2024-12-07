// eslint-disable-next-line no-unused-vars
import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems: 'center', flexWrap:'wrap', padding:'5px'}}>
            {products.map((product)=> <Item product= {product} key={product.id}/>)}
        </div>
    )
}

export default ItemList