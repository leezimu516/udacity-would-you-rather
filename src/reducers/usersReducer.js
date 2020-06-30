import {RECEIVED_USERS, SUBMIT_ANSWER_USER, ADD_QUESTION_USER} from '../utils/constants'

export function usersReducer(state={}, action) {
    switch (action.type) {
        case RECEIVED_USERS:
            return {
                ...state,
                ...action.users
            }

        case SUBMIT_ANSWER_USER:

            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }

        case ADD_QUESTION_USER:

            return {
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            }
        default:
            return state
    }
}