import React from "react"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

import "./style.css"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

}

export default App
