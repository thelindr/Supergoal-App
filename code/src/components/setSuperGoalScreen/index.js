import React from "react"
import "./style.css"

export default class SetSuperGoalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      superGoalName: "",
      superGoalValue: ""
    }
  }

  componentWillMount() {
    if (this.checkCurrentSuperGoal()) {
      this.setState({
        superGoalName: this.props.currentSuperGoal.name,
        superGoalValue: this.props.currentSuperGoal.value
      })
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

checkCurrentSuperGoal = () => (
  this.props.currentSuperGoal.value !== null
)

render() {
  return (
    <div className="SetSuperGoalScreen">

      {!this.checkCurrentSuperGoal() ? (
        <div>
          <h2>Welcome!</h2>
          <p>First of all, set up your SuperGoal!
          </p>
        </div>
      ) : (
        <div>
          <h2>Update SuperGoal</h2>
          <p>Your current SuperGoal is
            <br /><em>{this.props.currentSuperGoal.name}</em>
          </p>
          <p>with the required amount
            <br /><em>{this.props.currentSuperGoal.value} SEK</em>
          </p>
          <p>
            You can update your settings here:
          </p>
        </div>
      )
      }

      <form onSubmit={this.handleFormSubmit}>

        <label htmlFor="superNameKey">What do you want to save money for?</label>
        <br />
        <input
          id="superNameKey"
          type="text"
          name="superGoalName"
          placeholder={!this.checkCurrentSuperGoal() ? "e.g. Skateboard" : ""}
          value={this.state.superGoalName}
          onChange={this.handleSuperGoalNameChange} />

        <br />

        <label htmlFor="valueKey">How much money do you need to reach your SuperGoal?</label>
        <br />
        <div>
          <input
            id="valueKey"
            type="number"
            name="value"
            placeholder={!this.checkCurrentSuperGoal() ? "e.g. 2000" : ""}
            value={this.state.superGoalValue}
            onChange={this.handleSuperGoalValueChange} />
          <span>(SEK)</span>
        </div>

        <input className="btn" type="submit" value={!this.checkCurrentSuperGoal() ? "Save" : "Update"} />

      </form>
    </div>
  )
}

}
