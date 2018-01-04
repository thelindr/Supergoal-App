import React from "react"
import uuid from "uuid/v4"
import { BrowserRouter, Route } from "react-router-dom"
import MainScreen from "./mainscreen"
import SetSuperGoalScreen from "./setSuperGoalScreen"

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

  componentWillMount() {
    if (localStorage.getItem("superGoalAppData")) {
      this.setState(JSON.parse(localStorage.getItem("superGoalAppData")))
    }
  }
  // Here we parse (change the string back to an object) the localstorage from addTaskToList

  updateSuperGoal = (newSuperGoalName, newSuperGoalValue) => {
    // console.log("parent function was invoked")
    this.setState({
      superGoal: {
        name: newSuperGoalName,
        value: parseFloat(newSuperGoalValue)
      }
    }, () => { localStorage.setItem("superGoalAppData", JSON.stringify(this.state)) })
  }

  addTaskToList = (taskName, taskTimes, taskValue) => {
    const taskObject = {
      id: uuid(),
      name: taskName,
      done: false,
      times: parseFloat(taskTimes),
      value: taskValue,
      counter: 0
    }
    if (taskName === ("") || taskValue === ("")) {
      return null
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
    ((this.countTotalEarnings() / this.state.superGoal.value) * 100).toFixed(2)
  )

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route
            exact
            path="/" // if the URL matches '/' exactly
            render={() => { // then render
              if (this.state.superGoal.value === null) { // if there is no superGoal
                return <SetSuperGoalScreen // then display the SetSuperGoalScreen
                  currentSuperGoal={this.state.superGoal}
                  updateSuperGoalInApp={this.updateSuperGoal} /> // the callback function located
                // in this component, will be invoked
                // when the superGoal is setup
              } else { // else display the MainScreen
                return <MainScreen
                  taskList={this.state.taskList} // pass on the last update of
                  // the taskList (in the state) in the props
                  doneButtonWasClicked={this.updateCounter} // these callback functions
                  // are located in this component. They are passed on as props.
                  deleteButtonWasClicked={this.removeTaskFromList}
                  countTotalEarnings={this.countTotalEarnings}
                  countPercentageOfSupergoal={this.countPercentageOfSupergoal}
                  showTwoDecimals={this.showTwoDecimals}
                  superGoalName={this.state.superGoal.name}
                  addTaskToList={this.addTaskToList} />
              }
            }
            } />

          <Route
            exact
            path="/update-supergoal" // the URL used if the user wants to update her SuperGoal
            render={() =>
              <SetSuperGoalScreen
                currentSuperGoal={this.state.superGoal}
                updateSuperGoalInApp={this.updateSuperGoal} />
            } />

        </div>
      </BrowserRouter>
    )
  }

}
