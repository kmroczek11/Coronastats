import actions from "./actions";

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
  for (const [name, days] of entries) {
    switch (name) {
      case "Poland":
        days.push({
          name: "Poland",
          symbol: require("../../../assets/images/flags/pl.png"),
        });
        dispatch(actions.add(days));
        break;
      case "Italy":
        days.push({
          name: "Italy",
          symbol: require("../../../assets/images/flags/it.png"),
        });
        dispatch(actions.add(days));
        break;
      case "US":
        days.push({
          name: "US",
          symbol: require("../../../assets/images/flags/us.png"),
        });
        dispatch(actions.add(days));
        break;
      case "Spain":
        days.push({
          name: "Spain",
          symbol: require("../../../assets/images/flags/es.png"),
        });
        dispatch(actions.add(days));
        break;
      case "France":
        days.push({
          name: "France",
          symbol: require("../../../assets/images/flags/fr.png"),
        });
        dispatch(actions.add(days));
        break;
      case "Netherlands":
        days.push({
          name: "Netherlands",
          symbol: require("../../../assets/images/flags/nl.png"),
        });
        dispatch(actions.add(days));
        break;
      default:
        break;
    }
  }
  dispatch(actions.received());
};
