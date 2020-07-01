import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatPool, formatDate} from "../utils/helpers";
import { Link } from 'react-router-dom'
import { saveQuestionAnswer } from '../utils/api'
import {handleSumbitAnswer} from "../actions/questions";
import Question from "./Question";
import AnswerPoll from "./AnswerPoll";

class Poll extends Component {
    constructor() {
        super();
        this.state = {
            answer: ""
        };
    }

    handleSubmit = (e) => {
        // e.preventDefault();

        const {dispatch, question, authedUserReducer, questionId} = this.props;
        const answer = this.state.answer;
        const qid = question.id;
        const authedUser = authedUserReducer;
        dispatch(handleSumbitAnswer({ authedUser, qid, answer }))

    }

    onChangeValue = (e) => {
        this.setState({answer: e.target.value});
        console.log(e.target.value)

    }


    render() {


        const {question, authedUserReducer, questionId, isPoll} = this.props;
        // console.log('question: ', question);
        if (question === null) {
            return (
                <p>this question doesnt exist</p>
            )
        }

        // const {id, name, timestamp, optionOneText, optionTwoText, avatar,} = question;

        // console.log(id, name, timestamp, optionOneText, optionTwoText, avatar);
        // console.log(name)
        return (

            <div className='poll-container'>
                {isPoll === false
                && <Question id={questionId}/>}

                {isPoll === true
                && <AnswerPoll id={questionId}/>}

                {/*log out and 404*/}
                {isPoll === null
                && <div>404</div>}

            </div>


        )
    }
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, props) {
    // console.log(isPoll, props)
    const {id} = props.match.params
    const question = questionsReducer[id];

    let isPoll = null;
    console.log('question component', props);
    const isFromQuestionPage = props.location.pollProps!== undefined;
    if (isFromQuestionPage) {
        isPoll = props.location.pollProps.isPoll
    }


    return {
        user: authedUserReducer,
        question: formatPool(question, usersReducer),
        users: usersReducer,
        questionId: id,
        isPoll

    }
}

export default connect(mapStateToProp)(Poll)