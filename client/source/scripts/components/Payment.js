import React, { Component } from 'react';

export default class Payment extends Component {
  render() {
    return (
      <div>
        <form>
          <input className="white-text" type="text" placeholder="Name on Credit Card" />
          <input className="white-text" type="text" placeholder="Credit Card Number" pattern="[0-9]{13,16}" />
          <input className="white-text" type="text" placeholder="Exp Date (MM/YY)" />
          <input className="white-text" type="text" placeholder="CVV" />
        </form>
      </div>
    )
  }
}