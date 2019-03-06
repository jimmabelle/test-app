import React from "react"
import { Link } from "react-router-dom"
import Navigation from "./navigation"
import Piece from "./piece"

import logo from "../../images/svg/logo.svg"
import cart from "../../images/svg/cart.svg"

import shirts from "../../data/shirts"

import "./style.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showList: false
    }
  }

  toggleList = () => {
    this.setState(prevState => ({ showList: !prevState.showList }))
  }

  render() {
    const thisState = this.state
    return (
      <div className={thisState.showList ? "HeaderEdit" : "Header"}>
        <div className="Container">
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
        <Navigation toggleList={this.toggleList} />
        <Piece shirt={shirts} />
      </div>
    )
  }

}

export default Header
