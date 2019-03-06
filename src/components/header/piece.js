import React from "react"
import "./style.css"

class Piece extends React.Component {

  render() {
    // const thisState = this.state
    const thisProps = this.props
    console.log(thisProps.shirt)
    return (
      <div className="Piece">
        <div>
          <span className="title">{thisProps.shirt[0].bodyfit}</span>
          {thisProps.shirt[0].types.map(item => (
            <span className="types" key={item}>{item}</span>
          ))}
        </div>
        <div>
          <span>{thisProps.shirt[2].allitems}</span>
          <span>{thisProps.shirt[3].newarrivals}</span>
          <span>{thisProps.shirt[4].whiteshirts}</span>
          <span>{thisProps.shirt[5].outlets}</span>
        </div>
        <div>
          <span>{thisProps.shirt[6].sizeguide}</span>
          <span>{thisProps.shirt[7].etonexpress}</span>
        </div>
        <div>
          <span className="title">{thisProps.shirt[1].collection}</span>
          {thisProps.shirt[1].types.map(item => (
            <span className="types" key={item}>{item}</span>
          ))}
        </div>
      </div>
    )
  }

}

export default Piece
