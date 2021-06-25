import '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer, saveQuestion } from '../Api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions (question) {
    return {
        type: RECEIVE_QUESTIONS,
        question,
    }
};

function addAnswer ({authedUser, qid, answer}) {
    return {
        type: ADD_ANSWER,
        answerInfo: {
                authedUser,
                qid,
                answer
        }
    }
};

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
};

export function handleAnswerQuestion (qid, answer) {
    console.log("qid", qid)
    console.log("answer", answer)
    return (dispatch, getState) => {
        const {authedUser} = getState()
        console.log("authh a7a", authedUser)

        dispatch(showLoading());

        return saveQuestionAnswer({
                authedUser,
                qid,
                answer
        })
            .then (() => dispatch(addAnswer({
                authedUser,
                qid,
                answer
            })))
            .then(() => dispatch(hideLoading()))
    }
};

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
};

