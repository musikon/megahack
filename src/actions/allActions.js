import apiCall from '../utils/apiCall'

export const getUser = () => dispatch => {
  return apiCall({
    method: 'GET',
    path: '/user',
  }).then(response => {
    console.log(response)
    dispatch({
      type: 'GET_USER',
      userData: response
    })
  }).catch(error => console.log(error));
}

export const getUsers = () => dispatch => {
  return apiCall({
    method: 'GET',
    path: '/users',
  }).then(response => {
    dispatch({
      type: 'GET_USER',
      userData: response
    })
  }).catch(error => console.log(error));
}
