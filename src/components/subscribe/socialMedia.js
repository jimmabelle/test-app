import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class SocialMedia extends React.Component {

  render() {
    return (
      <div className="SocialMedia">
        <Link to="" className="facebook-icon" />
        <Link to="" className="instagram-icon" />
        <Link to="" className="youtube-icon" />
      </div>
    )
  }

}

export default SocialMedia
