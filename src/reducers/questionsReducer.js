import {RECEIVED_QUESTIONS} from '../utils/constants'

export function questionsReducer(state={}, action) {
    switch (action.type) {
        case RECEIVED_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        default:
            return state
    }
}