//redux does not have an initial state so we need a default
const INITIAL_STATE = {
  currentuser: null,
};

//if state is not set, initial state is used, null is a valid val here
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentuser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
