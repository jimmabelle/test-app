import React from "react"
import "./style.css"

import essentials from "../../images/jpg/essentials.jpg"

class Banner extends React.Component {
  render() {
    return (
      <div className="Banner">
        <div>
          <img className="essentials" src={essentials} alt="essentials" />
        </div>
        <div>
          <a className="headline" href="#">Eton Essentials</a>
          <p>
            Discover our most indispensablropse style essentials
            and the obsession for quality and design that goes into creating them.
          </p>
        </div>
        <div>
          <a className="shop" href="#">Shop now</a>
        </div>
      </div>
    )
  }
}

export default Banner
