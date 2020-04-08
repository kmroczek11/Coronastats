import { combineReducers } from 'redux'
import countriesReducer from './redux/countries/duck'
import followedReducer from "./redux/followed/duck"

const rootReducer = combineReducers({
    countries: countriesReducer,
    followed: followedReducer
})

export default rootReducer