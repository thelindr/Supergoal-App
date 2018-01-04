import React from "react"
// import { Link } from "react-router-dom"
import SetTask from "./../setTask"
import ListItem from "./../listItem"
import LiquidGauge from "./../liquidGauge"

export default class MainScreen extends React.Component {

  render() {
    console.log(this.props.superGoal)
    return (
      <div className="MainScreen">
        {this.props.taskList.length > 0 && // if there are items in the latest
          // updated taskList (passed on from the app/parent state via props),
          // then display them
          <div className="container">
            {/* <h1>My tasks:</h1> */}
            <div className="listitemcontainer">
              {this.props.taskList.map(item => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  item={item}
                  doneButtonWasClicked={this.props.doneButtonWasClicked}
                  deleteButtonWasClicked={this.props.deleteButtonWasClicked} />
              ))}
            </div>
          </div>
        }
        <div className="settaskcontainer">
          <SetTask
            addTaskToList={this.props.addTaskToList} />
        </div>
        {this.props.countTotalEarnings() > 0 && // if there are any earnings
          // then display the total earnings and the percentage of the supergoal
          <div className="earningscontainer">
            <LiquidGauge
              percentageOfSupergoal={this.props.countPercentageOfSupergoal()} />
            <h4>Wow, you&apos;ve earned: <span className="boldtext">{this.props.countTotalEarnings()} kronor!</span></h4>
            <p>That means you are <span className="bolditalictext"> {this.props.countPercentageOfSupergoal()} &#37; </span>
              closer to get your <span className="bolditalictext">{this.props.superGoalName} !!!</span>
            </p>

          </div>
        }
        {/* SetTask is always displayed if there is a superGoal */}

        {/* <Link className="changeGoal" to="/set-supergoal">Do you want
        to change your SuperGoal?</Link> */}

      </div>
    )
  }

}
