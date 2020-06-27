import {RECEIVED_USERS} from '../utils/constants'

export function usersReducer(state={}, action) {
    switch (action.type) {
        case RECEIVED_USERS:
            return {
                ...state,
                ...action.users
            }

        default:
            return state
    }
}