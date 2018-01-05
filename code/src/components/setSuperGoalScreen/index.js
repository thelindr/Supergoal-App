import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class SetSuperGoalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { // Local state used only for inputfields
      superGoalName: "",
      superGoalValue: ""
    }
  }
  // only in use if superGoal is updated
  componentWillMount() {
    if (this.checkCurrentSuperGoal()) {
      this.setState({
        superGoalName: this.props.currentSuperGoal.name,
        superGoalValue: this.props.currentSuperGoal.value
      })
    }
  }
  // only in use if superGoal is updated
  checkCurrentSuperGoal = () => (
    this.props.currentSuperGoal.value !== null
  )

  handleSuperGoalNameChange = event => {
    this.setState({
      superGoalName: event.target.value
    })
  }

  handleSuperGoalValueChange = event => {
    if (parseFloat(event.target.value) > 0) { // allows the user to only put in positive numbers
      this.setState({
        superGoalValue: event.target.value
      })
    } else if (event.target.value === "") { // allows the user to delete all numbers in inputfield
      this.setState({
        superGoalValue: ""
      })
    }
  }

handleFormSubmit = event => {
  event.preventDefault()
  this.props.updateSuperGoalInApp(this.state.superGoalName, this.state.superGoalValue)
}

render() {
  return (
    <div className="SetSuperGoalScreen">

      {!this.checkCurrentSuperGoal() ? (
        <div>
          <h1>Welcome!</h1>
          <p>First of all, set up your SuperGoal!
          </p>
        </div>
      ) : (
        <div className="updatesupergoalcontainer">
          <h2>Update your SuperGoal</h2>
          <p>Your current SuperGoal is
            <br /><span className="bolditalictext">{this.props.currentSuperGoal.name}</span>
          </p>
          <p>with the required amount
            <br /><span className="bolditalictext">{this.props.currentSuperGoal.value} SEK</span>
          </p>
          {/* <p>
            <span className="boldtext">You can update your settings here:</span>
          </p> */}
        </div>
      )
      }

      <form className="setsupergoalcontainer" onSubmit={this.handleFormSubmit}>

        <label htmlFor="superNameKey">What do you want to save money for?</label>
        <br />
        <input
          className="styleinputfield"
          id="superNameKey"
          type="text"
          name="superGoalName"
          required
          placeholder={!this.checkCurrentSuperGoal() ? "e.g. Skateboard" : ""} // Placeholder will be empty if there already is a supergoal
          value={this.state.superGoalName}
          onChange={this.handleSuperGoalNameChange} />

        <br />

        <label htmlFor="valueKey">How much money do you need to reach your SuperGoal?</label>
        <br />
        <div>
          <input
            className="styleinputfield"
            id="valueKey"
            type="number"
            name="value"
            required
            placeholder={!this.checkCurrentSuperGoal() ? "e.g. 2000 kr" : ""} // Placeholder will be empty if there already is a supergoal
            value={this.state.superGoalValue}
            onChange={this.handleSuperGoalValueChange} />
        </div>

        {this.checkCurrentSuperGoal() &&
          <Link className="btn-cancel" to="/">Cancel</Link>
        }

        <input className="btn" type="submit" value={!this.checkCurrentSuperGoal() ? "Save" : "Update"} />

      </form>
    </div>
  )
}

}
