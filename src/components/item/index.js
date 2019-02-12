import React from "react"

class Item extends React.Component {

  render() {
    const context = this.props
    return (
      <div>
        <figure>
          <img src={context.image} alt="product grid" />
          <figcaption>
            <span>{context.description}</span>
            <span>{context.price}</span>
          </figcaption>
        </figure>
      </div>
    )
  }

}
export default Item
