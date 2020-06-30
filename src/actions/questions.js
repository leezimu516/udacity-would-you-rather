import {RECEIVED_QUESTIONS, SUBMIT_ANSWER, ADD_QUESTION} from '../utils/constants'
import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {addNewQuestionUser, handleUserAnswer} from "./users";

export function receivedQuestions(questions) {
    return {
        type: RECEIVED_QUESTIONS,
        questions
    }
}

function submitAnswer({authedUser, qid, answer}) {
    return {
        type: SUBMIT_ANSWER,
        authedUser,
        qid,
        answer
    }
}


export function handleSumbitAnswer(info) {
    return (dispatch) => {
        dispatch(submitAnswer(info))
        dispatch(handleUserAnswer(info))

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in submit answer: ', e)
                dispatch(submitAnswer(info))
                dispatch(handleUserAnswer(info))
                alert('The was an error submitting answer. Try again.')
            })
    }
}

function addNewQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(info) {
    return (dispatch) => {

        return saveQuestion(info)
            .then((question) => {
                dispatch(addNewQuestion(question))
                dispatch(addNewQuestionUser(question))
            })
            .catch((e) => {
                console.log("error in adding question: ", e)
                alert('The was an error adding question. Try again.')
            })
    }


}