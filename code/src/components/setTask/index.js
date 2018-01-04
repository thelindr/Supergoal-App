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

  handleFormSubmit = event => {
    event.preventDefault() // 1.prevent clearing the page
    this.props.addTaskToList(this.state.taskName, this.state.taskTimes, this.state.taskValue)
    // 2.Updates list in parent
    this.setState({
      taskName: "",
      taskTimes: "1",
      taskValue: ""
    }) // 3.Resets the form inputfield
  }

  render() {
    return (
      <div>
        <form className="setTask" onSubmit={this.handleFormSubmit}>
          <label>
            <h2>Add a task</h2>
            Name your task:
            <br />
            <input
              className="styleinputfield"
              type="text"
              required
              name="taskName"
              value={this.state.taskName}
              onChange={this.handleTaskNameChange}
              placeholder="e.g Clean your room" />
          </label>
          <br />
          <label>
            How many times should this be done per week?
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
          <br />
          <label>
            Value of the task:
            <br />
            <input
              className="styleinputfield"
              type="number"
              required
              name="taskValue"
              value={this.state.taskValue}
              onChange={this.handleTaskValueChange}
              placeholder="e.g 50" />
          </label>
          <br />

          <button className="btn-add" type="submit">Add task</button>

        </form>
      </div>
    )
  }

}
