import React from "react"

export default class SetTask extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      taskName: ""
    }
  }

  handleTaskNameChange = event => {
    this.setState({
      taskName: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault() //1.prevent clearing the page
    this.props.addTaskToList(this.state.taskName) //2.Updates list in parent
    this.setState({
      taskName: ""
    }) //3.Resets the form inputfield
  }

  render() {
    // console.log("This is the taskname", this.state.taskName)
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="taskName"
            value={this.state.taskName}
            onChange={this.handleTaskNameChange}
            placeholder="Write task here" />

          <button type="submit">Add task</button>

        </form>
      </div>
    )
  }

}
