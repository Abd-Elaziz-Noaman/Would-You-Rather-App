import { getInitialData } from '../Api'
import { getUsers } from './users'
import { getQuestions } from './questions'

/*
export function handleGetUsers () {
    return (dispatch) => {
        return _getUsers()
        .then((user) => {
            dispatch(getUsers(user))
        })
    }
}

export function handleGetQuestions () {
    return (dispatch) => {
        return _getQuestions()
        .then((question) => {
            dispatch(getQuestions(question))
        })
    }
}

export function handleInitialData () {
  return (
    handleGetQuestions(),
    handleGetUsers()
  )
}

*/

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
    });
  };
}
