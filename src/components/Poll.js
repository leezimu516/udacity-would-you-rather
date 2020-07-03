import React, {Component, Fragment} from 'react';
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

    onChangeValue = (e) => {
        this.setState({answer: e.target.value});
        console.log(e.target.value)

    }


    render() {


        const {question, questionId, isPoll} = this.props;

        return (

            <div className='poll-container'>
                {/*{console.log(questionId, isPoll, isSubmit)}*/}
                {question === null ?
                    <h1>404: this page doesnt exist</h1>
                    :
                    <Fragment>

                        {isPoll ?
                            <AnswerPoll id={questionId}/>
                            :
                            <Question id={questionId} detail={true}/>
                        }
                    </Fragment>

                }


            </div>


        )
    }
}


function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, props) {
    const {id} = props.match.params;
    console.log(id, questionsReducer, questionsReducer === {})

    const question = questionsReducer[id];
    console.log(question)
    if (question === undefined) {
        return {
            user: authedUserReducer,
            question: null,
            users: usersReducer,
            questionId: id,
            isPoll: false
        }
    }

    const userAnsweredQuestionIdsRaw = Object.keys(usersReducer[authedUserReducer].answers);
    const userAnsweredQuestionIds = Object.keys(questionsReducer).filter((id) => (userAnsweredQuestionIdsRaw.includes(id)))

    console.log(id, userAnsweredQuestionIds)
    let isPoll = userAnsweredQuestionIds.includes(id)
    console.log(isPoll);


    return {
        user: authedUserReducer,
        question: formatPool(question, usersReducer),
        users: usersReducer,
        questionId: id,
        isPoll,

    }
}

export default connect(mapStateToProp)(Poll)