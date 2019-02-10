import React from "react"
import { Link } from "react-router-dom"

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Link to="/">Shirts</Link>
        <Link to="/Accessories">Accessories</Link>
        <Link to="/Our-World">Our World</Link>
      </div>
    )
  }

}

export default Navigation
