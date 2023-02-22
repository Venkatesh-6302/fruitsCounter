// Write your code here

import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoClick = () => {
    this.setState(prevSate => ({mangoCount: prevSate.mangoCount + 1}))
  }

  onBananaClick = () => {
    this.setState(prevSate => ({bananaCount: prevSate.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="inner-container">
            <div className="img-btn">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onMangoClick}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-btn">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onBananaClick}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
