import React from "react"

export default class ListItem extends React.Component {

  // handleCheckboxChange = () => {
  //   this.props.updateDone(this.props.id)
  // }

  handleDoneButtonClicked = () => {
    this.props.doneButtonWasClicked(this.props.item.id)
  }

  handleDeleteButtonClicked = () => {
    this.props.deleteButtonWasClicked(this.props.item.id)
  }

  render() {
    return (
      <div>
        <div>
          {/* <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={this.handleCheckboxChange} /> */}
          <h2>{this.props.item.name}</h2>
        </div>
        <div> <p>Done: {this.props.item.counter} / {this.props.item.times}</p></div>
        <div><p>Value of task: {this.props.item.value}</p></div>
        <div><p>Total earnings for this task: {this.props.item.value * this.props.item.counter}</p>
        </div>
        <button
          className="btn"
          onClick={this.handleDoneButtonClicked}
          disabled={this.props.item.times === this.props.item.counter}>
          {/* The button is disabled if the times equals counter */}
          I’m done!
        </button>
        <button
          className="btn"
          onClick={this.handleDeleteButtonClicked}>
          Delete
        </button>
      </div>
    )
  }

}
