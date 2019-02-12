import React from "react"
import { Link } from "react-router-dom"
// import data from "../../data/data"

import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <div className="Navigation">
          <Link to="/Shirts">Shirts</Link>
          <Link to="/Accessories">Accessories</Link>
          <Link to="/OurWorld">Our World</Link>
        </div>
      </div>
    )
  }

}

export default Navigation
