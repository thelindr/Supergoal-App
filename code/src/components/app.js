import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Mainscreen from "./mainscreen"

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
    console.log("parent function was invoked")
    this.setState({
      superGoal: {
        name: newSuperGoalName,
        value: newSuperGoalValue
      }
    })
  }

  render() {
    console.log("Thank you, mom got your supergoal:", this.state.superGoal)
    return (
      <BrowserRouter>
        <div>
          {/* <SetSuperGoal
            updateSuperGoalInApp={this.updateSuperGoal} /> */}
          <Route path="/" exact render={() => <SetSuperGoal updateSuperGoalInApp={this.updateSuperGoal} />} />
        </div>
      </BrowserRouter>
    )
  }

}
