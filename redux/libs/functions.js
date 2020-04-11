export const fetchCountries = async () => {
  const response = await fetch(
    "https://pomber.github.io/covid19/timeseries.json"
  );
  const json = await response.json();

  return json;
};
