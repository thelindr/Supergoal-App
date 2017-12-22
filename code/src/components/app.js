import React from "react"

import SetSuperGoal from "./setSuperGoal"
import SetTask from "./setTask"

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
    console.log("parent function was invoked")
    this.setState({
      superGoal: {
        name: newSuperGoalName,
        value: newSuperGoalValue
      }
    })
  }

  updateTaskList = (taskName) => {
    console.log("Task updated in parent", taskName)
    // this.setState({
    //   setTask: {
    //     taskName: "",
    //     done: false
    //   }
    // })
  }

  render() {
    console.log("Thank you, mom got your supergoal:", this.state.superGoal)
    return (
      <div>
        <SetSuperGoal
          updateSuperGoalInApp={this.updateSuperGoal} />
      </div>
    )
  }

}
