import { combineReducers } from 'redux'
import { authedUserReducer } from './authedUserReducer'
import { questionsReducer } from './questionsReducer'
import {usersReducer } from './usersReducer'

export default combineReducers({
    authedUserReducer,
    questionsReducer,
    usersReducer
})