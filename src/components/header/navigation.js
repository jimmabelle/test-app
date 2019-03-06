import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

// import shirts from "../../data/shirts"

class Navigation extends React.Component {

  render() {
    const thisProps = this.props
    return (
      <div>
        <div className="Navigation">
          <div className="Navigation-container">
            <Link to="/" onClick={thisProps.toggleList}>
              Shirts
            </Link>
            <Link to="/">Accessories</Link>
            <Link to="/">Our World</Link>
          </div>
        </div>
      </div>
    )
  }

}

export default Navigation
