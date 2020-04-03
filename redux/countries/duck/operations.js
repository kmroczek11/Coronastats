import actions from "./actions";

const fetchCountries = async () => {
  const response = await fetch(
    "https://pomber.github.io/covid19/timeseries.json"
  );
  const json = await response.json();

  return json;
};

export const getAllCountries = () => async dispatch => {
  const countries = await fetchCountries();
  console.log(countries);
};
