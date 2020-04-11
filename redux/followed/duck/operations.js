import actions from "./actions";
import codes from "../../libs/codes";
import { fetchCountries } from "../../libs/functions";

export const loadFollowed = (names) => async (dispatch) => {
  names.forEach((followed) => {
    dispatch(actions.addName(followed));
  });
};

export const addName = (followed) => async (dispatch) => {
  console.log("Dodawanie: ", followed);
  dispatch(actions.addName(followed));
};

export const removeName = (index) => async (dispatch) => {
  console.log("Usuwanie indeksu: ", index);
  dispatch(actions.removeName(index));
};

export const getFollowed = (f) => async (dispatch) => {
  dispatch(actions.clear());
  dispatch(actions.searched(false));
  const countries = await fetchCountries();
  const entries = Object.entries(countries);
  dispatch(actions.searched(true));
  f.forEach((followed) => {
    for (const [name, days] of entries) {
      if (name == followed) {
        for (const symbol of codes.symbols) {
          if (symbol.name == name) {
            days.push({
              name: name,
              symbol: symbol.symbol,
              selected: true,
            });
            dispatch(actions.addFollowed(days));
            break;
          }
        }
        break;
      }
    }
  });
};
