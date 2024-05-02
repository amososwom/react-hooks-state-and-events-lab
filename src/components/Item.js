import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const liItem = inCart ?  "in-cart" : "";
  const btnItem = inCart ?  "Remove From Cart" : "Add to Cart";

  return (
    <li className={liItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!inCart)} >{btnItem}</button>
    </li>
  );
}

export default Item;
