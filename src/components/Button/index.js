import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  showTable = () => {

  };

  render() {
    return (
      <button onClick={this.showTable} className='button'>Show user's list</button>
    );
  }
}

export default Button;
