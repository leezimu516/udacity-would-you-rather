import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatPool} from "../utils/helpers";
import {ProgressBar} from "react-bootstrap";

class AnswerPoll extends Component {

    render() {
        const {question, user, users} = this.props;
        if (question === null) {
            return (
                <p>this question doesnt exist</p>
            )
        }
        console.log(question)
        const {id, name, optionOneVotes, optionOneText, optionTwoVotes, optionTwoText, totalVotes, avatar,} = question;
        const voteOne = parseInt(optionOneVotes / totalVotes * 100, 10);
        const voteTwo = parseInt(optionTwoVotes / totalVotes * 100, 10);
        // const voteOne = `${parseInt(optionOneVotes / totalVotes * 100)}%`;
        // const voteTwo = `${parseInt(optionTwoVotes / totalVotes * 100)}%`;


        // console.log(id, name, optionOneVotes, optionOneText, optionTwoVotes, optionTwoText, totalVotes, avatar, voteOne, voteTwo);
        // console.log(id, user, users);
        const userAnswer = users[user].answers[id];

        return (
            <div className='answer-container'>
                <div className='question-row'>
                    <span> Asked by {name}</span>
                </div>


                <div className='question-row'>
                    <div className="question-column-left">
                        <img
                             src={avatar}
                             alt={`Avatar of ${name}`}
                            className='avatar'
                        />
                    </div>
                    <div className="question-column-right"
                         onChange={this.onChangeValue}>
                        <h2>Result</h2>

                        <div className='answer'>
                            {
                                userAnswer === 'optionOne' &&
                                <span className='answer-circle'>Your Vote</span>
                            }

                            <span>Would you Rather {optionOneText}?</span>
                            <ProgressBar now={voteOne} label={`${voteOne}%`} />
                            {optionOneVotes} out of {totalVotes} votes

                        </div>

                        <div className='answer'>
                            Would you Rather {optionTwoText}?
                            {
                                userAnswer === 'optionTwo' &&
                                <span className='answer-circle'>Your Vote</span>
                            }
                            <ProgressBar now={voteTwo} label={`${voteTwo}%`} />
                            {optionTwoVotes} out of {totalVotes} votes

                        </div>


                    </div>
                </div>

            </div>


        )
    }
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, {id}) {
    const question = questionsReducer[id];

    return {
        user: authedUserReducer,
        question: formatPool(question, usersReducer),
        users: usersReducer
    }
}

export default connect(mapStateToProp)(AnswerPoll)
