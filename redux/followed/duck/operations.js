import actions from "./actions";
import codes from "../../libs/codes";

const fetchCountries = async () => {
  const response = await fetch(
    "https://pomber.github.io/covid19/timeseries.json"
  );
  const json = await response.json();

  return json;
};

export const getCountries = (f) => async (dispatch) => {
  console.log("GetCountries")
  dispatch(actions.clear());
  const countries = await fetchCountries();
  const entries = Object.entries(countries);
  f.forEach((followed) => {
    for (const [name, days] of entries) {
      if (name == followed) {
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
        break;
      }
    }
  });
};
