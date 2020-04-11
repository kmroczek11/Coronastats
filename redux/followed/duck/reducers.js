import types from "./types";

const INITIAL_STATE = {
  followedNames: [],
  followedCountries: [],
  followedSearched: true,
};

const followedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_FOLLOWED_NAME:
      return {
        ...state,
        followedNames: [...state.followedNames, action.name],
      };
    case types.REMOVE_FOLLOWED_NAME:
      let newFollowedNames = [...state.followedNames];
      newFollowedNames.splice(action.index, 1);
      return {
        ...state,
        followedNames: newFollowedNames,
      };
    case types.ADD_FOLLOWED_COUNTRY:
      return {
        ...state,
        followedCountries: [...state.followedCountries, action.country],
      };
    case types.CLEAR_FOLLOWED_COUNTRIES:
      return {
        ...state,
        followedCountries: [],
      };
    case types.FOLLOWED_SEARCHED:
      return {
        ...state,
        followedSearched: action.searched,
      };
    default:
      return state;
  }
};

export default followedReducer;
