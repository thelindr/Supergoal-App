import React from "react"
import uuid from "uuid/v4"
import { BrowserRouter, Route } from "react-router-dom"
// import Mainscreen from "./mainscreen"

import SetSuperGoal from "./setSuperGoal"
import SetTask from "./setTask"
import ListItem from "./listItem"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      superGoal: {
        name: "",
        value: null
      },
      taskList: [] // start the app with an empty array
    }
  }

  updateSuperGoal = (newSuperGoalName, newSuperGoalValue) => {
    // console.log("parent function was invoked")
    this.setState({
      superGoal: {
        name: newSuperGoalName,
        value: parseFloat(newSuperGoalValue)
      }
    }, () => { localStorage.setItem("superGoalAppData", JSON.stringify(this.state)) })
  }

  componentWillMount() {
    if (localStorage.getItem("superGoalAppData")) {
      this.setState(JSON.parse(localStorage.getItem("superGoalAppData")))
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
    }, () => { localStorage.setItem("superGoalAppData", JSON.stringify(this.state)) })
    // At the end of array taskList, add a new object
    // The object needs to be stringified to be able to be saved in the state.
  }

  removeTaskFromList = taskId => {
    this.setState({
      taskList: this.state.taskList.filter(item => ( // FIX: prevState
        item.id !== taskId // Filter creates a new array containing items that
        // match this condition
      ))
    }, () => { localStorage.setItem("superGoalAppData", JSON.stringify(this.state)) })
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
  //   }, () => { localStorage.setItem("superGoalAppData", JSON.stringify(this.state)) })
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
    }, () => { localStorage.setItem("superGoalAppData", JSON.stringify(this.state)) })
  }

  countTotalEarnings = () => {
    let totalEarningsCounter = 0 // Start a counter at 0
    this.state.taskList.forEach(item => { // For each item in the tasklist
      totalEarningsCounter += (item.value * item.counter) // Add the earnings
      // for the item to the totalEarningsCounter
    })
    return totalEarningsCounter // Return the value of the totalEarningsCounter
  }

  countPercentageOfSupergoal = () => (
    (this.countTotalEarnings() / this.state.superGoal.value) * 100
  )

  render() {
    // console.log("List of tasks", this.state.taskList)
    // console.log("Thank you, mom got your supergoal:", this.state.superGoal)
    return (
      <BrowserRouter>
        <div className="App">

          <Route
            exact
            path="/set-supergoal"
            render={() =>
              <SetSuperGoal
                updateSuperGoalInApp={this.updateSuperGoal} />
            } />

          <Route
            exact
            path="/"
            render={() => {
              if (this.state.superGoal.value === null) {
                return <SetSuperGoal
                  updateSuperGoalInApp={this.updateSuperGoal} />
              } else {
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
                        doneButtonWasClicked={this.updateCounter}
                        deleteButtonWasClicked={this.removeTaskFromList} />
                    ))}
                    <div>
                      <h4>Wow, you&apos;ve earned: {this.countTotalEarnings()} kronor</h4>
                      <h4>You&apos;ve earned {this.countPercentageOfSupergoal()} &#37;
                       of your supergoal
                      </h4>
                    </div>
                  </div>
                )
              }
            }} />

        </div>
      </BrowserRouter>
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
