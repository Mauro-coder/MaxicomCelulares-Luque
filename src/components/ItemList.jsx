// eslint-disable-next-line no-unused-vars
import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div className="item-list">
          {products.map((product) => (
            <div className="item-card" key={product.id}>
              <Item product={product} />
            </div>
          ))}
        </div>
      );
    };
    

export default ItemList