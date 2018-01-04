import React from "react"
import { Link } from "react-router-dom"
import SetTask from "./../setTask"
import ListItem from "./../listItem"

export default class MainScreen extends React.Component {

  render() {
    console.log(this.props.superGoal)
    return (
      <div className="MainScreen">
        {this.props.taskList.length > 0 && // if there are items in the latest
          // updated taskList (passed on from the app/parent state via props),
          // then display them
          <div className="container">
            <h1>My tasks:</h1>
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
        {this.props.countTotalEarnings() > 0 && // if there are any earnings
          // then display the total earnings and the percentage of the supergoal
          <div className="earningscontainer">
            <h4>Wow, you&apos;ve earned: {this.props.countTotalEarnings()} kronor!</h4>
            <h4>That means you are {this.props.countPercentageOfSupergoal()} &#37;
              closer to get your {this.props.superGoalName} !!!
            </h4>

          </div>
        }
        {/* SetTask is always displayed if there is a superGoal */}
        <div className="settaskcontainer">
          <SetTask
            addTaskToList={this.props.addTaskToList} />
        </div>
        <Link className="changeGoal" to="/set-supergoal">Do you want to change your SuperGoal?</Link>
      </div>
    )
  }

}
