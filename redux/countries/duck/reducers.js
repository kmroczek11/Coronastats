import types from './types'

const INITIAL_STATE = {
  countries: {
    "Poland": [
      {
        "date": "2020-1-21",
        "confirmed": 23,
        "deaths": 12,
        "recovered": 7
      },
      {
        "date": "2020-1-22",
        "confirmed": 100,
        "deaths": 23,
        "recovered": 0
      },
      {
        "date": "2020-1-10",
        "confirmed": 80,
        "deaths": 21,
        "recovered": 3
      },
      {
        "date": "2020-1-23",
        "confirmed": 62,
        "deaths": 24,
        "recovered": 3
      },
      {
        "symbol": require("../../../assets/images/flags/pl.png")
      }
    ],
    "Germany": [
      {
        "date": "2020-1-12",
        "confirmed": 23,
        "deaths": 12,
        "recovered": 2
      },
      {
        "date": "2020-1-24",
        "confirmed": 100,
        "deaths": 23,
        "recovered": 12
      },
      {
        "symbol": require("../../../assets/images/flags/de.png")
      }
    ],
    "Spain": [
      {
        "date": "2020-1-12",
        "confirmed": 11,
        "deaths": 11,
        "recovered": 7
      },
      {
        "date": "2020-1-24",
        "confirmed": 22,
        "deaths": 24,
        "recovered": 10
      },
      {
        "symbol": require("../../../assets/images/flags/es.png")
      }
    ]
  }
}

const countriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
      case types.RANDOM:
        return {
  
        }
        default:
          return state
    }
  }

  export default countriesReducer