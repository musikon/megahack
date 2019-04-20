const initialState = {
  userData: []
};

export default (state = initialState, action) => {
  const { userData } = action;
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        userData
      }
    default:
      return state
  }
}
