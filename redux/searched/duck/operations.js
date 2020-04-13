import actions from "./actions";
import codes from "../../libs/codes";
import { fetchCountries } from "../../libs/functions";

String.prototype.beginsWith = function (string) {
  return this.indexOf(string) === 0;
};

export const searchCountry = (word, names) => async (dispatch) => {
  dispatch(actions.clear());
  dispatch(actions.searched(false));
  const countries = await fetchCountries()
  const entries = Object.entries(countries);
  dispatch(actions.searched(true));
  for (const [name, days] of entries) {
    if (name.toUpperCase().beginsWith(word.toUpperCase())) {
      for (const symbol of codes.symbols) {
        if (symbol.name == name) {
          if (names.includes(name)) {
            days.push({
              name: name,
              symbol: symbol.symbol,
              selected: true,
            });
          } else {
            days.push({
              name: name,
              symbol: symbol.symbol,
              selected: false,
            });
          }
          dispatch(actions.add(days));
          break;
        }
      }
    }
  }
};
