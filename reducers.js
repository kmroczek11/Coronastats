import { combineReducers } from 'redux'
import searchedReducer from './redux/countries/duck'
import followedReducer from "./redux/followed/duck"

const rootReducer = combineReducers({
    searched: searchedReducer,
    followed: followedReducer
})

export default rootReducer