import { RECEIVED_QUESTIONS, SUBMIT_ANSWER } from '../utils/constants'
import {saveQuestionAnswer} from "../utils/api";

export function receivedQuestions(questions) {
    return {
        type: RECEIVED_QUESTIONS,
        questions
    }
}

export function submitAnswer({ authedUser, qid, answer }) {
    return {
        type: SUBMIT_ANSWER,
        authedUser,
        qid,
        answer
    }
}


export function handleSumbitAnswer (info) {
  return (dispatch) => {
    dispatch(submitAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in submit answer: ', e)
        dispatch(submitAnswer(info))
        alert('The was an error submitting answer. Try again.')
      })
  }
}