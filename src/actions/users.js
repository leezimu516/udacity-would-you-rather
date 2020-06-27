import { RECEIVED_USERS } from '../utils/constants'

export function receivedUsers(users) {
    return {
        type: RECEIVED_USERS,
        users
    }
}