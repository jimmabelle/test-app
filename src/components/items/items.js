import React from "react"
import Item from "./item"
import "./style.css"

import product from "../../data/products"

class Items extends React.Component {

  render() {
    return (
      <div className="Items">
        <div className="headline">Timeless must-haves</div>
        <div className="product-container">
          {product.map(item => (
            <div className="product-inner" key={item.id}>
              <Item description={item.description} price={item.price} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Items
