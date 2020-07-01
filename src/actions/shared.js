import { setAuthedUser } from './authedUser'
import { receivedQuestions } from './questions'
import { receivedUsers } from './users'
// import * as constant from '../utils/constants'
import { getInitialData } from '../utils/api'

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receivedUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(receivedQuestions(questions));

            })
    }

}

