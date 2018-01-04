import React from "react"
import "./style.css"

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="textholder">
          <div className="icon" />
          <h2>My SuperGoalApp</h2>
          <div className="icon" />
        </div>
      </header>
    )
  }

}
