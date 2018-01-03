import React from "react"
import SetTask from "./../setTask"
import ListItem from "./../listItem"

export default class MainScreen extends React.Component {

  render() {
    return (
      <div className="MainScreen">
        {this.props.taskList.length > 0 && // if there are items in the latest
          // updated taskList (passed on from the app/parent state via props),
          // then display them
          <div>
            <h1>My tasks:</h1>
            {this.props.taskList.map(item => (
              <ListItem
                key={item.id}
                id={item.id}
                item={item}
                doneButtonWasClicked={this.props.doneButtonWasClicked}
                deleteButtonWasClicked={this.props.deleteButtonWasClicked} />
            ))}
          </div>
        }
        {/* SetTask is always displayed if there is a superGoal */}
        <SetTask
          addTaskToList={this.props.addTaskToList} />

        {/* <h4>Wow, you&apos;ve earned: {this.countTotalEarnings()} kronor</h4>
          <h4>You&apos;ve earned {this.countPercentageOfSupergoal()} &#37;
          of your supergoal
        </h4> */}

      </div>
    )
  }

}
