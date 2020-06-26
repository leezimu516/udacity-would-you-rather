import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA.js'

export function getInitalData() {
    return promise.all(
        [_getUsers(), _getQuestions()]
    ).then(([user, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestion(info) {
    return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}