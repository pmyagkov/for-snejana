import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import './index.css';

class Table extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { error, loading, users = [] } = this.props;

    if (error) {
      return <div className='table-error'>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className='table-loading'></div>;
    }

    return (
      <table className='table'>
        <tr>
          <th className='table-cell'>Name</th>
          <th className='table-cell'>Email</th>
          <th className='table-cell'>Address</th>
        </tr>
        {users.map(user =>
          <tr key={user.id}>
            <td className='table-cell'>{user.name}</td>
            <td className='table-cell'>{user.email}</td>
            <td className='table-cell'>
              {user.address['street']},
              {user.address['suite']},
              {user.address['city']},
              {user.address['zipcode']}
            </td>
          </tr>
        )}
      </table>
    );
  }
}

const mapStateToProps = state => ({
  users: state.Users.users,
  loading: state.Users.loading,
  error: state.Users.error
});

export default connect(mapStateToProps)(Table);
