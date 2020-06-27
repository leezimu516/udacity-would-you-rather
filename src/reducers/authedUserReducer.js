import {SET_AUTHED_USER} from '../utils/constants'

export function authedUserReducer(state=null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id

        default:
            return state
    }
}