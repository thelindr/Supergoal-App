import React from "react"

import SetSuperGoal from "./setSuperGoal"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      superGoal: {
        name: "",
        value: null
      }
    }
  }

  updateSuperGoal = (newSuperGoalName, newSuperGoalValue) => {
    this.setState = {
      superGoal: {
        name: newSuperGoalName,
        value: newSuperGoalValue
      }
    }
  }

  render() {
    console.log(this.state.superGoal)
    return (
      <div>
        <SetSuperGoal
          updateSuperGoalInApp={this.updateSuperGoal} />
      </div>
    )
  }

}
