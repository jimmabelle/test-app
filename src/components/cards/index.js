import React from "react"
import "./style.css"

import visa from "../../images/png/visa.png"
import mastercard from "../../images/png/mastercard.png"
import amex from "../../images/png/amex.png"
import paypal from "../../images/png/paypal.png"

class Cards extends React.Component {

  render() {
    return (
      <div className="Cards">
        <span><img src={visa} alt="visa" /></span>
        <span><img src={mastercard} alt="mastercard" /></span>
        <span><img src={amex} alt="amex" /></span>
        <span><img src={paypal} alt="paypal" /></span>
        <address className="copyright">© 2019 Eton. All rights reserved.</address>
      </div>
    )
  }

}

export default Cards
