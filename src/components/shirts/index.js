import React from "react"
import "./style.css"

import transformation from "../../images/jpg/transformation.jpg"

class Shirts extends React.Component {

  render() {
    return (
      <div className="Shirts">
        <div>
          <img className="transformation" src={transformation} alt="transformation mode" />
        </div>
        <div>
          <a className="headline" href="#">Expected the unexpected</a>
          <p>
          New year, new you, new style. Time for a change with a collection that offers nothing but.
          </p>
        </div>
        <div>
          <a className="collection" href="#">Explore Collection</a>
        </div>
      </div>
    )
  }

}

export default Shirts
