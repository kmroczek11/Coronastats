import actions from "./actions";
import codes from "./codes"

const fetchCountries = async () => {
  const response = await fetch(
    "https://pomber.github.io/covid19/timeseries.json"
  );
  const json = await response.json();

  return json;
};

export const getAllCountries = () => async (dispatch) => {
  const countries = await fetchCountries();
  const entries = Object.entries(countries);
  console.log("lol")
  for (const [name, days] of entries) {
    console.log(name)
    for (var symbol of codes.symbols) {
      console.log(symbol)
      if (symbol.name == name) {
        days.push({
          name: name,
          symbol: symbol.symbol,
        });
        dispatch(actions.add(days));
      }
    }
  }
  //dispatch(actions.received());
};
