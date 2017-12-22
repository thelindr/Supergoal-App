import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Mainscreen from "./mainscreen"

import SetSuperGoal from "./setSuperGoal"
import SetTask from "./setTask"
import ListItem from ".listItem"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // superGoal: {
      //   name: "",
      //   value: null
      // },
      taskList: []
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

  addTaskToList = taskName => {
    console.log("Task updated in parent", taskName)
    this.setState({
      taskList: [...this.state.taskList, { name: taskName, done: false }]
    })
  }

  render() {
    console.log("List of tasks", this.state.taskList)
    // console.log("Thank you, mom got your supergoal:", this.state.superGoal)
    return (
      <div>
        <SetTask
          addTaskToList={this.addTaskToList} />
        <h1>My tasks:</h1>
        {this.state.taskList.map(item => {
          return <ListItem />
        })}
      </div>
      // <BrowserRouter>
      //   <div>
      //     {/* <SetSuperGoal
      //       updateSuperGoalInApp={this.updateSuperGoal} /> */}
      //     <Route path="/" exact render={() => <SetSuperGoal updateSuperGoalInApp={this.updateSuperGoal} />} />
      //   </div>
      // </BrowserRouter>
    )
  }

}
