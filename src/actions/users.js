import {ADD_QUESTION_USER, RECEIVED_USERS, SUBMIT_ANSWER_USER} from '../utils/constants'

export function receivedUsers(users) {
    return {
        type: RECEIVED_USERS,
        users
    }
}


export function handleUserAnswer({authedUser, qid, answer}) {
    return {
        type: SUBMIT_ANSWER_USER,
        authedUser,
        qid,
        answer
    }
}



export function addNewQuestionUser(question) {
    return {
        type: ADD_QUESTION_USER,
        question
    }
}