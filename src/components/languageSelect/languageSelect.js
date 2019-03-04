import React from "react"
import "./style.css"

class LanguageSelect extends React.Component {

  render() {
    const thisProps = this.props
    // const thisState = this.state
    const data = thisProps.listItems.map(item => (
      <li key={item.indx} onClick={thisProps.toggleListOfData}>
        {item.country}
      </li>
    ))
    return (
      <div className={`${thisProps.showData ? "" : "LanguageSelect"}`}>
        <ul role="article" className="selectedData">
          {data[0]}
        </ul>
        <ul role="article" className="allData">
          {data}
        </ul>
      </div>
    )
  }

}

export default LanguageSelect
