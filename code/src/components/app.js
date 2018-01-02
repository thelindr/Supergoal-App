import React from "react"
import uuid from "uuid/v4"
// import { BrowserRouter, Route } from "react-router-dom"
// import Mainscreen from "./mainscreen"

// import SetSuperGoal from "./setSuperGoal"
import SetTask from "./setTask"
import ListItem from "./listItem"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // superGoal: {
      //   name: "",
      //   value: null
      // },
      taskList: [] // start the app with an empty array
    }
  }

  // updateSuperGoal = (newSuperGoalName, newSuperGoalValue) => {
  //   console.log("parent function was invoked")
  //   this.setState({
  //     superGoal: {
  //       name: newSuperGoalName,
  //       value: newSuperGoalValue
  //     }
  //   })
  // }
  componentWillMount() {
    if (localStorage.getItem("savedTaskObject")) {
      this.setState(JSON.parse(localStorage.getItem("savedTaskObject")))
    }
  }
  // Here we parse (change the string back to an object) the localstorage from addTaskToList

  addTaskToList = (taskName, taskTimes, taskValue) => {
    const taskObject = {
      id: uuid(),
      name: taskName,
      done: false,
      times: parseFloat(taskTimes),
      value: taskValue,
      counter: 0
    }
    // FIX: Remove done?
    this.setState({
      taskList: [taskObject, ...this.state.taskList] // FIX: prevState
    }, () => { localStorage.setItem("savedTaskObject", JSON.stringify(this.state)) })
    // At the end of array taskList, add a new object
    // The object needs to be stringified to be able to be saved in the state.
  }

  // updateDoneStatus = id => { // Function receives the name of the object
  //   // that shall be updated
  //   const updatedListOfTasks = this.state.taskList.map(item => {
  //     if (item.id === id) {
  //       item.done = !item.done
  //     }
  //     return item
  //   })
  //   this.setState({
  //     taskList: updatedListOfTasks
  //   }, () => { localStorage.setItem("savedTaskObject", JSON.stringify(this.state)) })
  // }
  // As JavaScript is asynchronous, we need a funcion to make sure
  // that it is run only after the state of addTaskToList is changed
  // as the newly object needs to be used

  updateCounter = id => { // Function receives the id of the object
    // that shall be updated
    const updatedListOfTasks = this.state.taskList.map(item => {
      if (item.id === id) {
        item.counter += 1
      }
      return item
    })
    this.setState({
      taskList: updatedListOfTasks
    }, () => { localStorage.setItem("savedTaskObject", JSON.stringify(this.state)) })
  }

  render() {
    console.log("List of tasks", this.state.taskList)
    // console.log("Thank you, mom got your supergoal:", this.state.superGoal)
    return (
      <div>
        <SetTask
          addTaskToList={this.addTaskToList} />
        <h1>My tasks:</h1>
        {this.state.taskList.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            item={item}
            buttonWasClicked={this.updateCounter} />
        ))}
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
