import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">LTI Limo</a>
          <ul className="right hide-on-med-and-down main-nav">
            <li>Services</li>
            <li>Book Online</li>
            <li>Roadshow</li>
            <li>Fleet</li>
            <li>Chauffeurs</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
}