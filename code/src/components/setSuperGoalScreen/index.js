import React from "react"
import "./style.css"

export default class SetSuperGoalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      superGoalName: "",
      superGoalValue: null
    }
  }

  handleSuperGoalNameChange = event => {
    this.setState({
      superGoalName: event.target.value
    })
  }

  handleSuperGoalValueChange = event => {
    this.setState({
      superGoalValue: event.target.value
    })
  }

handleFormSubmit = event => {
  event.preventDefault()
  this.props.updateSuperGoalInApp(this.state.superGoalName, this.state.superGoalValue)
}

render() {
  return (
    <div className="SetSuperGoalScreen">

      {this.props.currentSuperGoal.value === null &&
        <div>
          <h2>Welcome!</h2>
          <p>First of all, set up your SuperGoal!
            <br /> What do you want to save money for?
          </p>
        </div>
      }

      <form onSubmit={this.handleFormSubmit}>

        <label htmlFor="superNameKey">My SuperGoal to save money for:</label>

        <input
          id="superNameKey"
          type="text"
          name="superGoalName"
          placeholder="e.g. Skateboard"
          value={this.state.superGoalName}
          onChange={this.handleSuperGoalNameChange} />

        <label htmlFor="valueKey">Total amount required to reach my SuperGoal:</label>

        <div>
          <input
            id="valueKey"
            type="number"
            name="value"
            placeholder="e.g. 3000"
            value={this.state.superGoalValue}
            onChange={this.handleSuperGoalValueChange} />
          <span>(SEK)</span>
        </div>

        <input type="submit" value="Save SuperGoal" />

      </form>
    </div>
  )
}

}
