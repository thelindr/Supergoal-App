import React from "react"

export default class ListItem extends React.Component {

  // handleCheckboxChange = () => {
  //   this.props.updateDone(this.props.id)
  // }

  handleButtonClicked = () => {
    this.props.buttonWasClicked(this.props.item.id)
  }

  render() {
    return (
      <div>
        <div>
          {/* <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={this.handleCheckboxChange} /> */}
          {this.props.item.name}
        </div>
        <button
          onClick={this.handleButtonClicked}
          disabled={this.props.item.times === this.props.item.counter}>
          I´m done!
        </button>
        <div>Done: {this.props.item.counter} / {this.props.item.times}</div>
        <div>Value of task: {this.props.item.value}</div>
        <div>Total earnings for this task: {this.props.item.value * this.props.item.counter}</div>
      </div>
    )
  }

}
