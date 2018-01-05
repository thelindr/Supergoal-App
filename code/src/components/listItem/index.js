import React from "react"
import numberToStringWithComma from "./../../numberToStringWithComma"

export default class ListItem extends React.Component {

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
          <h2>{this.props.item.name}</h2>
        </div>
        <button
          className={this.props.item.times === this.props.item.counter ? "btn-disabled" : "btn"} // changes the style of the button
          onClick={this.handleDoneButtonClicked}
          disabled={this.props.item.times === this.props.item.counter}>
          {/* The button is disabled if the times equals counter */}
          Did it!
        </button>
        <div><p className="countingDone">Done: <span className="boldtext">{this.props.item.counter}</span> / <span className="boldtext">{this.props.item.times}</span> times</p>
          <p className="valueOfTask">Value of this task: {numberToStringWithComma(this.props.item.value)} kr</p>
        </div>
        <div className="moneybag-container"><h4 className="moneybag-heading">Total earnings for this task:</h4>
          <p className="moneybag-top" />
          <p className={this.props.item.counter ? "moneybag-add" : "moneybag"}> {numberToStringWithComma(this.props.item.value * this.props.item.counter)} kr</p>
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
