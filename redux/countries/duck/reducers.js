import types from "./types";

const INITIAL_STATE = {
  countries: [],
  countriesSearched: true,
};

const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        countries: [...state.countries, action.country],
      };
    case types.CLEAR:
      return {
        ...state,
        countries: [],
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
