import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./navigation"

import Shirts from "./shirts"
import Accessories from "./accessories"
import Ourworld from "./ourworld"

import Header from "./header"

import "./style.css"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Navigation />

          <Route path="/shirts" exact component={Shirts} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/ourworld" component={Ourworld} />
        </div>
      </HashRouter>
    )
  }

}

export default App
