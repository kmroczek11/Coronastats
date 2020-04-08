import types from "./types";

const INITIAL_STATE = {
  all: []
};

const followedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        all: [...state.all, action.country],
      };
    case types.CLEAR:
      return {
        ...state,
        all: [],
      };
    default:
      return state;
  }
};

export default followedReducer;
