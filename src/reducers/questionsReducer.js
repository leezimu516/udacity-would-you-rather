import {ADD_QUESTION, RECEIVED_QUESTIONS, SUBMIT_ANSWER} from '../utils/constants'

export function questionsReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVED_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };

        case SUBMIT_ANSWER:
            return {
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat(action.authedUser)
                    }

                }
            };

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };

        default:
            return state
    }
}