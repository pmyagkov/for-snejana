import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css';

let isSortReversed = false;

class Table extends Component {
  onSort = (key) => {
    const data = this.props.users;

    isSortReversed = !isSortReversed;
    data.sort((a,b) => {
      return isSortReversed ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    });
    this.setState({ data });
  }

  render() {
    const { error, loading, users = [] } = this.props;

    if (error) {
      return <div className='table__error'>Error! { error }</div>;
    }

    if (loading) {
      return <div className='table__loading'></div>;
    }

    return (
      <table className='table'>
        <tbody>
          <tr>
            <th onClick={ () => this.onSort('name') }
                className='table__cell-heading table__cell_sortable'>
                Name
            </th>
            <th className='table__cell-heading'>Email</th>
            <th className='table__cell-heading'>Address</th>
          </tr>
          {users.map(user =>
            <tr key={ user.id }>
              <td className='table__cell'>{ user.name }</td>
              <td className='table__cell'>{ user.email }</td>
              <td className='table__cell'>
                { user.address['street'] },
                { user.address['suite'] },
                { user.address['city'] },
                { user.address['zipcode'] }
              </td>
            </tr>
          )}
        </tbody>
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
