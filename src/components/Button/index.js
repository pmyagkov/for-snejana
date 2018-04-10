import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import './index.css';

class Button extends Component {
  render() {
    return (
      <button onClick={ this.props.fetchUsers } className='button'>Show users' list</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchUsers: () => {
          dispatch(fetchUsers());
      }
  }
};

export default connect(null, mapDispatchToProps)(Button);
