import React from "react"
import { Link } from "react-router-dom"
import SearchForm from "./searchForm"
import Navigation from "./navigation"
import Piece from "./piece"

// import magnifier from "../../images/svg/magnifier.svg"
// import logo from "../../images/svg/logo.svg"
// import cart from "../../images/svg/cart.svg"

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
              <div className="logo">
                <svg
                  version="1.1"
                  id="Lager_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 554.708 120.807"
                  enableBackground="new 0 0 554.708 120.807"
                  xmlSpace="preserve">
                  <path d="M424.971,5.65v7.795l3.543,1.417c13.465,5.433,13.465,5.433,13.465,19.134v31.89l-0.354,24.803
                c-0.236,17.598-0.236,17.598-11.693,19.843l-3.543,0.709v7.795h45.354v-7.795l-3.543-0.709
                c-13.583-2.717-14.291-2.717-14.528-19.843l-0.354-24.803v-31.89l72.283,85.039h10.63V58.799l0.354-24.803
                c0.236-17.835,0.236-17.835,10.276-19.843l3.543-0.709V5.65h-42.52v7.795l3.543,0.709c12.165,2.48,12.874,2.48,13.11,19.843
                l0.354,24.803v31.89L452.609,5.65H424.971z" />
                  <path d="M336.624,3.878c-33.071,0-59.055,24.449-59.055,59.528c0,34.37,25.039,57.402,57.165,57.402
                c33.071,0,59.055-24.449,59.055-59.528C393.79,26.909,368.75,3.878,336.624,3.878z M336.27,110.177
                c-23.031,0-38.15-19.252-38.15-48.543c0-29.055,14.764-47.126,36.969-47.126c23.031,0,38.15,19.252,38.15,48.543
                C373.238,92.106,358.475,110.177,336.27,110.177z" />
                  <path d="M146.467,5.65l-3.543,35.433h8.504l1.772-4.606c8.031-20.906,8.031-20.906,23.031-20.906h12.402v80.787
                c0,10.984,0,10.984-15.945,14.173l-3.543,0.709v7.795h56.693v-7.795l-3.543-0.709c-15.945-3.189-15.945-3.189-15.945-14.173V15.571
                h12.402c15.709,0,15.709,0,22.323,21.969l1.063,3.543h8.504V5.65H146.467z" />
                  <path d="M6.861,5.65v7.795l3.543,0.709c11.339,2.244,11.339,2.244,11.339,12.756v70.866c0,10.039,0,10.039-13.465,12.756
                l-3.543,0.709v7.795h98.504l3.543-35.433h-8.504l-1.772,4.252c-8.504,20.551-8.504,20.551-23.031,20.551H49.38
                c-10.63,0-10.63,0-10.63-10.63V65.177h9.921c14.055,0,14.055,0,16.299,11.339l0.709,3.543h7.795V41.083h-7.795l-0.709,3.543
                c-2.126,10.63-2.126,10.63-16.299,10.63H38.75V15.571h31.181c16.772,0,16.772,0,22.323,18.425l1.063,3.543h8.504V5.65H6.861z" />
                </svg>
              </div>
            </Link>
          </span>
          <span>
            <div className="cart">
              <svg
                viewBox="0 0 19.77 19.49"
                version="1.1"
                id="Lager_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px">
                <path d="M18.47,4H15.63A6.12,6.12,0,0,0,4.14,4H1.3A1.3,1.3,0,0,0,0,5.31V18.19a1.3,1.3,0,0,0,1.3,1.3H18.47a1.3,1.3,0,0,0,1.31.3V5.31A1.3,1.3,0,0,0,18.47,4ZM9.88,1.3A4.82,4.82,0,0,1,14.2,4H5.56A4.82,4.82,0,0,1,9.88,1.3Zm8.58,16.89H1.3V5.31H18.47V18.19Z" />
              </svg>
            </div>
            <div className="text">0 Sek</div>
          </span>
        </div>
        <SearchForm />
        <Navigation toggleList={this.toggleList} />
        <Piece shirt={shirts} />
      </div>
    )
  }

}

export default Header
