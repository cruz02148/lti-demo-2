import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class PassengerInfo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('I was clicked');
  }
  
  render() {
    return (
      <div>
        <form>
          <input className="white-text" type="text" placeholder="First Name"/>
          <input className="white-text" type="text" placeholder="Last Name" />
          <input className="white-text" type="text" placeholder="Email" />
          <input className="white-text" type="tel" placeholder="Phone Number" />
        </form>
      </div>
    );
  }
}