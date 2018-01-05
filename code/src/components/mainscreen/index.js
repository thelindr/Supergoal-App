import React from "react"
import SetTask from "./../setTask"
import ListItem from "./../listItem"
import LiquidGauge from "./../liquidGauge"
import numberToStringWithComma from "./../../numberToStringWithComma"

export default class MainScreen extends React.Component {

  render() {
    return (
      <div className="MainScreen">
        {this.props.taskList.length > 0
          // if there are items in the latest
          // updated taskList (passed on from the app/parent state via props),
          // then display them
          // <div className="container">
          ?
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
          :
          <div className="listitemcontainer">
            <div className="settaskcontainer">
              <p>Your current SuperGoal is
                <br /><span className="bolditalictext">{this.props.superGoalName}</span>
              </p>
              <p>and you need
                <br /><span className="bolditalictext">{this.props.superGoalValue} kronor </span>
              </p>
              {/*
              <p>
                Cool, your SuperGoal:
              </p>
              <p>
                {this.props.superGoalName} you need {this.props.superGoalValue} kr to reach it.
              </p> */}
              <p>
                What could you do to start earning money for it?
              </p>
            </div>
          </div>
          // </div>
        }
        <div className="container settaskcontainer">
          <SetTask
            addTaskToList={this.props.addTaskToList} />
        </div>
        {this.props.countTotalEarnings() > 0 && // if there are any earnings
          // then display the total earnings and the percentage of the supergoal
          <div className="earningscontainer">
            <LiquidGauge
              percentageOfSupergoal={this.props.countPercentageOfSupergoal()} />
            <h4>Wow, you&apos;ve earned: <span className="boldtext">{numberToStringWithComma(this.props.countTotalEarnings())} kronor!</span></h4>
            <p>That means you are <span className="bolditalictext"> {numberToStringWithComma(this.props.countPercentageOfSupergoal())} &#37; </span>
              closer to get your <span className="bolditalictext">{this.props.superGoalName} !!!</span>
            </p>

          </div>
        }

        {/* NO LONGER IN SCOPE:<Link className="changeGoal" to="/set-supergoal">Do you want
        to change your SuperGoal?</Link> */}

      </div>
    )
  }

}
