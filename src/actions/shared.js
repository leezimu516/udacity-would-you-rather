import { setAuthedUser } from './authedUser'
import { receivedQuestions } from './questions'
import { receivedUsers } from './users'
import * as constant from '../utils/constants'
import { getInitalData } from '../utils/api'

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        return getInitalData()
            .then(({users, questions}) => {
                dispatch(receivedUsers(users));
                dispatch(receivedQuestions(questions));
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }

}