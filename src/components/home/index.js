import React from "react"
import Banner from "../banner/banner"
import Items from "../items/items"
import Shops from "../shops/shops"
import Logga from "../logga"
import CustomSelect from "../customSelect"

import Subscribe from "../subscribe/subscribe"

import Care from "../care"
import Cards from "../cards"

import "./style.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: [],
      showData: false,
      lastIndx: 0
    }
  }

  toggleListOfData = () => {
    this.setState(prevState => ({ showData: !prevState.showData }))
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const items = result.map(item => {
          const that = this.state
          item.indx = that.lastIndx
          this.setState(prevState => ({ lastIndx: prevState.lastIndx + 1 }))
          return item
        })
        this.setState({ listItems: items })
      })
  }

  render() {
    const thisState = this.state
    const that = this
    return (
      <div>
        <Banner />
        <Items />
        <div className="shops">
          <Shops />
          <Logga />
          <CustomSelect
            listItems={thisState.listItems}
            showData={thisState.showData}
            toggleListOfData={that.toggleListOfData} />
        </div>
        <Subscribe />
        <div className="care">
          <Care />
        </div>
        <div className="cards">
          <Cards />
        </div>
      </div>
    )
  }
}

export default Home
