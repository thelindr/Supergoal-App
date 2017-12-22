import React from "react"

export default class SetTask extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      taskName: "",
      done: false
    }
  }

  handleTaskNameChange = event => {
    this.setState({
      taskName: event.target.value
    })
  }

  handleDoneChange = event => {
    this.setState({
      done: event.target.value
    })
  }

  //prevent clearing the page
  handleFormSubmit = event => {
    console.log("submit")
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="taskName"
            value={this.state.taskName}
            onChange={this.handleTaskNameChange}
            placeholder="My task" />

          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange} />

        </form>
      </div>
    )
  }

}
