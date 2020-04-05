import types from "./types";

const INITIAL_STATE = {
  countries: [],
  countriesReceived: false,
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
    case types.RECEIVED:
      return {
        ...state,
        countriesReceived: true,
      };
    default:
      return state;
  }
};

export default countriesReducer;
