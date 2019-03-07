import React from "react"
import "./style.css"

class SearchForm extends React.Component {

  render() {
    return (
      <div className="SearchForm">
        <form>
          <div className="container">
            <input className="search" type="search" />
            <button className="button" type="button">
              <div className="magnifier">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.84 19.84">
                  <defs>
                    <style>.cls-1fill:#1d1d1b</style>
                  </defs>
                  <title>magnifier</title>
                  <path
                    className="cls-1"
                    d="M1.52,8.27A6.75,6.75,0,1,1,8.27,15,6.75,6.75,0,0,1,1.52,8.27ZM19.84,18.78l-5.23-5.23a8.26,8.26,0,1,0-1.06,1.06l5.23,5.23Z" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default SearchForm
