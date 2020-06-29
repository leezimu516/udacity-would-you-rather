import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {formatPool} from "../utils/helpers";
import {ProgressBar} from "react-bootstrap";

class AnswerPoll extends Component {

    render() {
        const {question} = this.props;
        if (question === null) {
            return (
                <p>this question doesnt exist</p>
            )
        }
        console.log(question)
        const {id, name, optionOneVotes, optionOneText, optionTwoVotes, optionTwoText, totalVotes, avatar,} = question;
        // const voteOne = parseInt(optionOneVotes / totalVotes * 100);
        // const votetwo = parseInt(optionTwoVotes / totalVotes * 100);
        const voteOne = `${parseInt(optionOneVotes / totalVotes * 100)}%`;
        const voteTwo = `${parseInt(optionTwoVotes / totalVotes * 100)}%`;


        console.log(id, name, optionOneVotes, optionOneText, optionTwoVotes, optionTwoText, totalVotes, avatar, voteOne, voteTwo);

        return (
            <div className='answer-container'>
                <div className='question-row'>
                    <span> Asked by {name}</span>
                </div>


                <div className='question-row'>
                    <img className="question-column-left"
                         src={avatar}
                         alt={`Avatar of ${name}`}
                        // className='avatar'
                    />
                    <div className="question-column-right"
                         onChange={this.onChangeValue}>
                        <h2>Result</h2>

                        <div className='answer'>
                            Would you Rather {optionOneText}?
                            <div className='bar'>
                                <ProgressBar
                                    style={{width: voteOne, backgroundColor: 'greenyellow'}}>
                                    <span className='sr-only'>{voteOne} Complete</span>
                                </ProgressBar>
                            </div>
                            {optionOneVotes} out of {totalVotes} votes

                        </div>

                        <div className='answer'>
                            Would you Rather {optionTwoText}?
                            <div className='bar'>
                                <ProgressBar className='bar'
                                             style={{width: voteTwo, backgroundColor: 'greenyellow'}}>
                                    <span className='sr-only'>{voteTwo} Complete</span>
                                </ProgressBar>
                            </div>
                            {optionTwoVotes} out of {totalVotes} votes

                        </div>


                    </div>
                </div>

                {/*<ProgressBar className='answer-container' variant="success" now={40}/>*/}
                {/*<ProgressBar variant="info" now={40} style={{width: '70%', backgroundColor: 'red'}}><span*/}
                {/*className='sr-only'>70% Complete</span></ProgressBar>*/}
                {/*<ProgressBar variant="warning" now={60} style={{width: '80%', backgroundColor: 'red'}}><span*/}
                {/*className='sr-only'>70% Complete</span></ProgressBar>*/}
                {/*<ProgressBar variant="danger" now={80} style={{width: '80%', backgroundColor: 'red'}}><span*/}
                {/*className='sr-only'>70% Complete</span></ProgressBar>*/}

            </div>


        )
    }
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, props) {
    // console.log(props.match.params)
    const {id} = props.match.params
    const question = questionsReducer[id];

    return {
        authedUserReducer,
        question: formatPool(question, usersReducer),
    }
}

export default connect(mapStateToProp)(AnswerPoll)
