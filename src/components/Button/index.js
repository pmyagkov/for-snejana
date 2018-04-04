import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import './index.css';

class Button extends Component {
  onButtonClick = () => {
    this.props.dispatch(fetchUsers());
  };

  render() {
    return (
      <button onClick={ this.onButtonClick } className='button'>Show users' list</button>
    );
  }
}

export default connect()(Button);
