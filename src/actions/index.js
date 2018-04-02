export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchUsersSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchUsersFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
