import React from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
}
  from 'material-ui/Table';

export default class WorkoutTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '400px',
      tableData: [
        {
          day: 'Monday',
          exercise1: 'Bench Press / 5 sets of 6 reps',
          exercise2: 'Incline Barbell Press / 4 sets of 10 reps',
          exercise3: 'Dumbbell Fly / 4 sets of 10 reps',
          exercise4: 'Cable Crossover / 5 sets of 12 reps',
          exercise5: 'Push-ups / 4 sets of 10 reps',
        },
        {
          day: 'Tuesday',
          exercise1: 'Pullups / 4 sets as many as you can ',
          exercise2: 'Barbell Row / 4 sets of 10 reps',
          exercise3: 'Seated Cable Row / 4 sets of 12 reps',
          exercise4: 'Machine Lat Pulldown / 4 sets of 12 reps',
          exercise5: 'Dumbbell One Arm Row / 4 sets of 8 reps',
        },
        {
          day: 'Wednesday',
          exercise1: 'Barbell Squats / 5 sets of 8 reps',
          exercise2: 'Machine Leg Press / 5 sets of 12 reps',
          exercise3: 'Dumbbell Lunges / 4 sets of 8 reps per leg',
          exercise4: 'Barbell Romanian Deadlift / 4 sets of 6 reps',
          exercise5: 'Machine Leg Curl / 3 sets of 12 reps',
        },
        {
          day: 'Thursday',
          exercise1: 'Standing Barbell Military Press / 4 sets of 8 reps',
          exercise2: 'Dumbbell Lateral Raise / 4 sets of 10 reps',
          exercise3: 'Machine Rear Raise / 4 sets of 12 reps',
          exercise4: 'Front Plate Raise / 3 sets of 10 reps',
          exercise5: 'Arnold Press / 4 sets of 10 reps',
        },
        {
          day: 'Friday',
          exercise1: 'Close Grip Bench Press / 4 sets of 8 reps',
          exercise2: 'Barbell Curl / 4 sets of 10 reps',
          exercise3: 'Dumbbell Extension / 4 sets of 10 reps',
          exercise4: 'Seated Preacher Curl / 4 sets of 8 reps',
          exercise5: 'Cable Pushdown superset with Cable Curl / 4 sets of 10 reps',
        },
        {
          day: 'Saturday',
          exercise1: 'Push-ups / 5 sets of 10 reps',
          exercise2: 'Pull-ups / 5 sets as many as you can',
          exercise3: 'Treadmill / 60 minutes',
        },
        {
          day: 'Sunday',
          exercise1: 'Rest',
        },
      ],
    };
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event) {
    this.setState({ height: event.target.value });
  }

  componentWillMount() {
    axios.get('/api/workouts/hard')
      .then(function (response) {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="6" tooltip="Super Header"
                style={{ textAlign: 'center' }}
              >
                Weekly Workout Routine
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Day">Day</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 1</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 2</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 3</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 4</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 5</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.tableData.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.day}</TableRowColumn>
                <TableRowColumn>{row.exercise1}</TableRowColumn>
                <TableRowColumn>{row.exercise2}</TableRowColumn>
                <TableRowColumn>{row.exercise3}</TableRowColumn>
                <TableRowColumn>{row.exercise4}</TableRowColumn>
                <TableRowColumn>{row.exercise5}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
