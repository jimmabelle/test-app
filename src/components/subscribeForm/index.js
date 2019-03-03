import React from "react"
import "./style.css"

class SubscribeForm extends React.Component {

  render() {
    return (
      <div className="SubscribeForm">
        <form>
          <div className="container">
            <input className="email" type="text" placeholder="Your email" />
            <button className="button" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    )
  }

}

export default SubscribeForm
