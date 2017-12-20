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

  updateSuperGoal = (newName, newValue) => {
    this.setState = {
      superGoal: {
        name: newName,
        value: newValue
      }
    }
  }

  render() {
    return (
      <div>
        <SetSuperGoal
          updateSuperGoalInApp={this.updateSuperGoal} />
      </div>
    )
  }

}
