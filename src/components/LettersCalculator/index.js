import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Calculate the Letters you enter</h1>
        <label>Enter the phrase</label>
        <br />
        <input type="search" placeholder="Enter the phrase" />
        <br />
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <p>No.of letters: {count}</p>
      </div>
    )
  }
}
export default LettersCalculator
