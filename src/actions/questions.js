import { RECEIVED_QUESTIONS } from '../utils/constants'

export function receivedQuestions(questions) {
    return {
        type: RECEIVED_QUESTIONS,
        questions
    }
}
