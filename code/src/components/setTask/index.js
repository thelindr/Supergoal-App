import React from "react"

export default class SetTask extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      taskName: "",
      taskTimes: "1",
      taskValue: ""
    }
  }

  handleTaskNameChange = event => {
    this.setState({
      taskName: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault() //1.prevent clearing the page
    this.props.addTaskToList(this.state.taskName, this.state.taskTimes, this.state.taskValue) // 2.Updates list in parent
    this.setState({
      taskName: "",
      taskTimes: "1",
      taskValue: ""
    }) // 3.Resets the form inputfield
  }

  handleTaskTimesChange = event => {
    this.setState({
      taskTimes: event.target.value
    })
  }

  handleTaskValueChange = event => { // OBS! Make sure dots are allowed
    if (event.target.value && parseFloat(event.target.value) >= 0) { // check if input value is OK
      this.setState({
      // taskValue: event.target.value
        taskValue: parseFloat(event.target.value)
      })
    } else if (event.target.value === "") {
      this.setState({
        taskValue: ""
      })
    }
  }

  render() {
    // console.log("This is the taskname", this.state.taskName)
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Write your task name here:
            <input
              type="text"
              name="taskName"
              value={this.state.taskName}
              onChange={this.handleTaskNameChange}
              placeholder="Write task here" />
          </label>

          <label>
            How many times to be done this week?
            <select value={this.state.taskTimes} onChange={this.handleTaskTimesChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>

          <label>
            Write your task value here:
            <input
              type="number"
              name="taskValue"
              value={this.state.taskValue}
              onChange={this.handleTaskValueChange}
              placeholder="Write task value here" />
          </label>

          <button type="submit">Add task</button>

        </form>
      </div>
    )
  }

}
