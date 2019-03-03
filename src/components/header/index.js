import React from "react"
import { Link } from "react-router-dom"
import Navigation from "../navigation"

import logo from "../../images/svg/logo.svg"
import cart from "../../images/svg/cart.svg"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <div>
        <div className="Header">
          <span>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </span>
          <span>
            <img className="cart" src={cart} alt="cart" />
            0 SEK
          </span>
        </div>
        <Navigation />
      </div>
    )
  }

}

export default Header
