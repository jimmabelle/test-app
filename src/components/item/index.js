import React from "react"
import "./style.css"

class Item extends React.Component {

  render() {
    const context = this.props

    return (
      <div className="Item">
        <img className="grid" src={context.image} alt="shirts" />
        <div className="item-text">
          <span className="description">{context.description}</span>
          <span className="price">
            {"$"}
            {context.price}
          </span>
        </div>
      </div>
    )
  }

}
export default Item
