import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatPool} from "../utils/helpers";
import Question from "./Question";
import AnswerPoll from "./AnswerPoll";


class Poll extends Component {
    constructor() {
        super();
        this.state = {
            answer: ""
        };
    }

    // handleSubmit = (e) => {
    //     // e.preventDefault();
    //
    //     const {dispatch, question, authedUserReducer, questionId} = this.props;
    //     const answer = this.state.answer;
    //     const qid = question.id;
    //     const authedUser = authedUserReducer;
    //     dispatch(handleSumbitAnswer({authedUser, qid, answer}))
    //
    // }

    onChangeValue = (e) => {
        this.setState({answer: e.target.value});
        console.log(e.target.value)

    }


    render() {


        const {question, questionId, isPoll, isSubmit} = this.props;
        if (question === null) {
            return (
                <p>this question doesnt exist</p>
            )
        }

        return (

            <div className='poll-container'>
                {console.log(questionId, isPoll, isSubmit)}
                {isPoll === false
                && <Question id={questionId} isSubmit={true}/>}

                {isPoll === true
                && <AnswerPoll id={questionId}/>}

                {isSubmit === true
                && <AnswerPoll id={questionId}/>}

                {/*log out and 404*/}
                {(isPoll === null)
                &&
                <div>
                    404
                </div>
                }

            </div>


        )
    }
}


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, props) {
    // console.log(isPoll, props)
    const {id} = props.match.params;
    console.log(id, questionsReducer, questionsReducer === {})
    if (isEmpty(questionsReducer)) {
        return {
            user: authedUserReducer,
            question: null,
            users: usersReducer,
            questionId: id,
            isPoll: null,
            isSubmit: false

        }
    }

    const question = questionsReducer[id];

    let isPoll = null;
    console.log('question component', props);
    const isFromQuestionPage = props.location.pollProps !== undefined;
    if (isFromQuestionPage) {
        isPoll = props.location.pollProps.isPoll
    }

    let isSubmit = null;
    const isSubmitFromQuestionPage = props.location.pollProps !== undefined;
    if (isSubmitFromQuestionPage) {
        isSubmit = props.location.pollProps.isSubmit
    }

    console.log(isPoll, isSubmit);

    return {
        user: authedUserReducer,
        question: formatPool(question, usersReducer),
        users: usersReducer,
        questionId: id,
        isPoll,
        isSubmit

    }
}

export default connect(mapStateToProp)(Poll)