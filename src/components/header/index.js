import React from "react"

import logo from "../../images/svg/logo.svg"
import cart from "../../images/svg/cart.svg"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <span>
          <img className="logo" src={logo} alt="logo" />
        </span>
        <span>
          <img className="cart" src={cart} alt="cart" />
          0 SEK
        </span>
      </div>
    )
  }

}

export default Header
