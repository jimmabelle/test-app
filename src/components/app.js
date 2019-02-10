import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./navigation"

import Shirts from "./shirts"
import Accessories from "./accessories"
import OurWorld from "./ourworld"

import "./style.css"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={Shirts} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/ourworld" component={OurWorld} />
        </div>
      </HashRouter>
    )
  }

}

export default App
