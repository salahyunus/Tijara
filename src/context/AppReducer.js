const initialState = {
  // cart:
  basket: [],
  //   user:
  user: null,
};
export { initialState };
const AppReducer = (state = initialState, action) => {
  // used switch statement to handle multiple actions
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    //   if no action:
    default:
      return state;

    //   more actions here...
  }
};

export { AppReducer };
