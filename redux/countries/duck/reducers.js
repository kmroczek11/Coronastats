import types from "./types";

const INITIAL_STATE = {
  searchedCountries: [],
  countriesSearched: true,
};

const searchedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_SEARCHED:
      return {
        ...state,
        searchedCountries: [...state.searchedCountries, action.country],
      };
    case types.CLEAR_SEARCHED_COUNTRIES:
      return {
        ...state,
        searchedCountries: [],
      };
    case types.COUNTRIES_SEARCHED:
      return {
        ...state,
        countriesSearched: action.searched,
      };
    default:
      return state;
  }
};

export default searchedReducer;
