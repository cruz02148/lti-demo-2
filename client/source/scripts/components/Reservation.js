import React, { Component } from 'react';
import PassengerInfo from './PassengerInfo';
import TripInfo from './TripInfo';
import Payment from './Payment';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import { amber600, grey100 } from 'material-ui/styles/colors';
import ActionCreditCard from 'material-ui/svg-icons/action/credit-card';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import SocialPerson from 'material-ui/svg-icons/social/person';

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PassengerInfo />;
      case 1:
        return <TripInfo />;
      case 2:
        return <Payment />;
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const labelStyle = {
      color: amber600
    };
    const labelText = {
      color: "#000000"
    };

    return (
      <div className="stepper-div">
        <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel icon={<SocialPerson color={grey100} />} style={labelStyle}>Passenger Info</StepLabel>
            </Step>
            <Step>
              <StepLabel icon={<MapsDirectionsCar color={grey100} />} style={labelStyle}>Trip Details</StepLabel>
            </Step>
            <Step>
              <StepLabel icon={<ActionCreditCard color={grey100} />} style={labelStyle}>Payment</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <div>
                <p className="white-text">Thank you for booking with LTI. Your confirmation number is 877900</p>
              </div>
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{marginTop: 12}}>
                  <RaisedButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 16}}
                    backgroundColor= "fff"
                    labelStyle={labelText}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    backgroundColor= "#ffb300"
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
