import React from "react"
import Item from "../item"
import Shops from "../shops"
import Logga from "../logga"
import CustomSelect from "../customSelect"
import SubscribeForm from "../subscribeForm"
import SocialMedia from "../socialMedia"
import Care from "../care"
import Cards from "../cards"

import "./style.css"

import essentials from "../../images/jpg/essentials.jpg"
import product from "../../data/products"

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
        <div className="Main">
          <div>
            <img className="essentials" src={essentials} alt="essentials" />
          </div>
          <div>
            <a className="headline" href="#">Eton Essentials</a>
            <p>
              Discover our most indispensablropse style essentials
              and the obsession for quality and design that goes into creating them.
            </p>
          </div>
          <div>
            <a className="shop" href="#">Shop now</a>
          </div>
        </div>
        <div className="product">
          <div className="headline">Timeless must-haves</div>
          <div className="product-container">
            {product.map(item => (
              <div className="product-inner" key={item.id}>
                <Item
                  description={item.description}
                  price={item.price}
                  image={item.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="shops">
          <Shops />
          <Logga />
          <CustomSelect
            listItems={thisState.listItems}
            showData={thisState.showData}
            toggleListOfData={that.toggleListOfData} />
        </div>
        <div className="subscribe">
          <SubscribeForm />
          <SocialMedia />
        </div>
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
