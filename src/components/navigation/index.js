import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <div className="Navigation">
          <Link to="/">Shirts</Link>
          <Link to="/">Accessories</Link>
          <Link to="/">Our World</Link>
        </div>
      </div>
    )
  }

}

export default Navigation
