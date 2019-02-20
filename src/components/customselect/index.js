import React from "react"

class CustomSelect extends React.Component {

  render() {
    const select = this.props
    return (
      <div>
        <select key={select.id}>
          {select.options.map(item => (
            <option key={item.id} value={item.value}>
              {item.country}
            </option>
          ))}
        </select>
      </div>
    )
  }

}

export default CustomSelect
