import React from "react"
import SubscribeForm from "./subscribeForm"
import SocialMedia from "./socialMedia"

class Subscribe extends React.Component {
  render() {
    return (
      <div className="Subscribe">
        <SubscribeForm />
        <SocialMedia />
      </div>
    )
  }
}

export default Subscribe
