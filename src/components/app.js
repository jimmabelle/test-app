import React from "react"
import { HashRouter, Route } from "react-router-dom"

import Home from "./home"
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
          <Route path="/" exact component={Home} />
          <Route path="/shirts" component={Shirts} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/ourworld" component={Ourworld} />
        </div>
      </HashRouter>
    )
  }

}

export default App
