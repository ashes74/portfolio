import React, { Component } from 'react';
import '../styles/Button.css';

export default class Button extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="button">
        <button> { content } </button>
      </div>
    );
  }
}


