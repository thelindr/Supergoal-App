import React from "react"

export default class ListItem extends React.Component {

  handleCheckboxChange = () => {
    this.props.updateDone(this.props.item.name)
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.item.done}
          onChange={this.handleCheckboxChange} />
        {this.props.item.name}
      </div>
    )
  }

}
