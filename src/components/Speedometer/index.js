// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAcceleration = () => {
    const {count} = this.state
    console.log(count)
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyBrakes = () => {
    const {count} = this.state
    console.log(count)
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-heading">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.onAcceleration}
            className="acceleration"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.applyBrakes} className="brakes" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
