import types from "./types";

const add = (country) => ({
  type: types.ADD,
  country,
});

const clear = () => ({
  type: types.CLEAR,
});

export default {
  add,
  clear,
};
