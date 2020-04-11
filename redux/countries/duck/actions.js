import types from "./types";

const add = (country) => ({
  type: types.ADD_SEARCHED,
  country,
});

const clear = () => ({
  type: types.CLEAR_SEARCHED_COUNTRIES,
});

const searched = (searched) => ({
  type: types.COUNTRIES_SEARCHED,
  searched,
});

export default {
  add,
  clear,
  searched,
};
