import React from "react"

export default class SetSuperGoalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      superGoalName: "",
      superGoalValue: 0
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
  // console.log("submit")
  event.preventDefault()
  this.props.updateSuperGoalInApp(this.state.superGoalName, this.state.superGoalValue)
}

render() {
  // console.log(this.state.superGoalName)
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>

        <label htmlFor="superNameKey">My Massively cool Super Goal:</label>

        <input
          id="superNameKey"
          type="text"
          name="superGoalName"
          value={this.state.superGoalName}
          onChange={this.handleSuperGoalNameChange} />

        <label htmlFor="valueKey">I need this much money to get to my Super Goal:</label>

        <input
          id="valueKey"
          type="number"
          name="value"
          value={this.state.superGoalValue}
          onChange={this.handleSuperGoalValueChange} />

        <input type="submit" value="Save SuperGoal" />

      </form>
    </div>
  )
}

}
