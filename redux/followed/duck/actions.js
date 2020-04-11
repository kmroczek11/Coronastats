import types from "./types";

const addName = (name) => ({
  type: types.ADD_FOLLOWED_NAME,
  name,
});

const removeName = (index) => ({
  type: types.REMOVE_FOLLOWED_NAME,
  index,
});

const addFollowed = (country) => ({
  type: types.ADD_FOLLOWED_COUNTRY,
  country,
});

const searched = (searched) => ({
  type: types.FOLLOWED_SEARCHED,
  searched,
});

const clear = () => ({
  type: types.CLEAR_FOLLOWED_COUNTRIES,
});

export default {
  addName,
  removeName,
  addFollowed,
  searched,
  clear,
};
