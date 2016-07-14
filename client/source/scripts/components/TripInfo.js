import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import moment from 'moment';

const selectStyles = {
  display: "block"
};
const hint = {
  color: "white"
};

export default class TripInfo extends Component {
  render() {
    return (
      <form>
        <div>
          <DatePicker
            autoOk={true}
            hintText="Trip Date"
            hintStyle={hint}
            formatDate={date => moment(date).format('MMMM D, YYYY')}
          />
          <TimePicker
            hintText="Pickup time"
            hintStyle={hint}
          />
          <select style={selectStyles}>
            <option
              value=""
              className="grey-text text-lighten-1"
              disabled
              selected
            >Select a Trip Type</option>
            <option value="AP">Airport Pickup</option>
            <option value="AD">Airport Dropoff</option>
            <option value="TR">Transfer</option>
            <option value="AS">Hourly</option>
          </select>
          <select style={selectStyles}>
            <option
              value=""
              className="grey-text text-lighten-1"
              disabled
              selected
            >Select a Vehicle Type</option>
            <option value="Sedan">Standard Sedan (BMW 740Li)</option>
            <option value="SUV">SUV</option>
            <option value="Sprinter">Executive Sprinter</option>
            <option value="S550">Premium Sedan (MB S550)</option>
            <option value="Limo Sprinter">Limo Sprinter</option>
            <option value="Limo">Stretch Limo</option>
          </select>
          <input className="white-text" type="text" placeholder="Number of Passengers" />
          <input className="white-text" type="text" placeholder="Pickup Location" />
          <input className="white-text" type="text" placeholder="Dropoff Location" />
          <input className="white-text" type="text" placeholder="Special Notes" />
        </div>
      </form>
    );
  }
}