import React from "react"
import "./style.css"

class Item extends React.Component {

  render() {
    const thisProps = this.props

    return (
      <div className="Item">
        <img className="grid" src={thisProps.image} alt="shirts" />
        <div className="item-text">
          <span className="description">{thisProps.description}</span>
          <span className="price">
            {"$"}
            {thisProps.price}
          </span>
        </div>
      </div>
    )
  }

}
export default Item
