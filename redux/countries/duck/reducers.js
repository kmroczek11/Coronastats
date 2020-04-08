import types from "./types";

const INITIAL_STATE = {
  all: [],
  countriesSearched: true,
};

const countriesReducer = (state = INITIAL_STATE, action) => {
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
    case types.SEARCHED:
      return {
        ...state,
        countriesSearched: action.searched,
      };
    default:
      return state;
  }
};

export default countriesReducer;
