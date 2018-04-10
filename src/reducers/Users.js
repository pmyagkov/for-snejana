import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE } from '../actions';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const User = function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        users: []
      };

    default:
      return state;
  }
}

export default User;
