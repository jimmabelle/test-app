import React from "react"
import Item from "../item"
import Stores from "../stores"
import Logga from "../logga"
import CustomSelect from "../customselect"

import "./style.css"

import essentials from "../../images/jpg/essentials.jpg"
import product from "../../data/products"
import options from "../../data/countries"
// <span className="custom-select">
//   <select>
//     {options.map(item => (
//       <option key={item.id} value={item.value}>
//         {item.country}
//       </option>
//     ))}
//   </select>
// </span>

class Main extends React.Component {

  render() {
    return (
      <div>
        <div className="Main">
          <div>
            <img className="essentials" src={essentials} alt="essentials" />
          </div>
          <div>
            <a className="headline" href="#">Eton Essentials</a>
            <p>
              Discover our most indispensable style essentials
              and the obsession for quality and design that goes into creating them.
            </p>
          </div>
          <div>
            <a className="shop" href="#">Shop now</a>
          </div>
        </div>
        <div className="product">
          <div className="headline">Timeless must-haves</div>
          <div className="product-container">
            {product.map(item => (
              <div className="product-inner" key={item.id}>
                <Item
                  description={item.description}
                  price={item.price}
                  image={item.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="shops">
          <span><Stores /></span>
          <span><Logga /></span>
          <span><CustomSelect options={options} /></span>
        </div>
      </div>
    )
  }

}

export default Main
