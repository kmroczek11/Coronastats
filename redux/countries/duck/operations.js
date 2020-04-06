import actions from "./actions";
import codes from "./codes";

const fetchCountries = async () => {
  const response = await fetch(
    "https://pomber.github.io/covid19/timeseries.json"
  );
  const json = await response.json();

  return json;
};

String.prototype.beginsWith = function (string) {
  return this.indexOf(string) === 0;
};

export const searchCountry = (n) => async (dispatch) => {
  dispatch(actions.clear());
  dispatch(actions.searched(false));
  const countries = await fetchCountries();
  dispatch(actions.searched(true));
  const entries = Object.entries(countries);
  for (const [name, days] of entries) {
    if (name.toUpperCase().beginsWith(n.toUpperCase())) {
      for (var symbol of codes.symbols) {
        if (symbol.name == name) {
          days.push({
            name: name,
            symbol: symbol.symbol,
          });
          dispatch(actions.add(days));
          break;
        }
      }
    }
  }
};
