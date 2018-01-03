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
      <div className="taskContainer">
        <div>
          {/* <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={this.handleCheckboxChange} /> */}
          <h2>{this.props.item.name}</h2>
        </div>
<<<<<<< HEAD
        <div> <p>Done: {this.props.item.counter} / {this.props.item.times}</p></div>
        <div><p>Value of task: {this.props.item.value} kr </p></div>
        <div><p>Total earnings for this task: {this.props.item.value * this.props.item.counter} kr</p>
        </div>
=======
>>>>>>> b4164f7f9e475592b1fc0d31f36be34ee44233fd
        <button
          className="btn"
          onClick={this.handleDoneButtonClicked}
          disabled={this.props.item.times === this.props.item.counter}>
          {/* The button is disabled if the times equals counter */}
          Did it!
        </button>
        <div><p className="countingDone">Done: <span className="boldtext">{this.props.item.counter}</span> / <span className="boldtext">{this.props.item.times}</span> times</p>
          <p className="valueOfTask">Value of this task: {this.props.item.value} kr</p>
        </div>
        <div className="moneybag-container"><h4 className="moneybag-heading">Total earnings for this task:</h4>
          <p className="moneybag-top" />
          <p className="moneybag"> {this.props.item.value * this.props.item.counter} kr</p>
        </div>
        <button
          className="btn-delete"
          onClick={this.handleDeleteButtonClicked}>
          Delete task
        </button>
      </div>
    )
  }

}
