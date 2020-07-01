import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatPool, formatDate} from "../utils/helpers";
import { Link } from 'react-router-dom'
import { saveQuestionAnswer } from '../utils/api'
import {handleSumbitAnswer} from "../actions/questions";

class Question extends Component {
    constructor() {
        super();
        this.state = {
            answer: ""
        };
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        const {dispatch, question, authedUserReducer} = this.props;
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
        // console.log('question component', this.props);

        const {question} = this.props;
        // console.log('question: ', question);
        if (question === null) {
            return (
                <p>this question doesnt exist</p>
            )
        }

        const {id, name, timestamp, optionOneText, optionTwoText, avatar,} = question;
        // console.log(id, name, timestamp, optionOneText, optionTwoText, avatar);
        // console.log(name)
        return (

            <div className='question'>
                <div className='question-row'>
                    <span>{name} asks:</span>
                </div>


                <div className='question-row'>
                    <div className="question-column-left">
                       <img
                         src={avatar}
                         alt={`Avatar of ${name}`}
                        className='avatar'
                    />

                    </div>

                    <form className="question-column-right"
                          onChange={this.onChangeValue}>
                        <h2>Would You Rather ...</h2>

                        <div>
                            <input type="radio" id="optionOne" name={id} value='optionOne'/>
                            <label htmlFor={optionOneText}>{optionOneText}</label>
                        </div>
                        <div>
                            <input type="radio" id="optionTwo" name={id} value='optionTwo'/>
                            <label htmlFor={optionTwoText}>{optionTwoText}</label>
                        </div>

                        <div className='question-button'>
                            <Link to={
                                {
                                    pathname: `/questions/${id}`,
                                    pollProps: {isPoll: this.props.isPoll}
                                }}>
                                <button className='submit-question' onClick={this.handleSubmit} >View Poll</button>
                            </Link>

                            {/*<Link to={`/questions/${id}`}>*/}
                                {/*<button className='submit-question'>View Poll</button>*/}
                            {/*</Link>*/}
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, {id, isPoll}) {
    const question = questionsReducer[id];
    return {
        authedUserReducer,
        question: formatPool(question, usersReducer),

    }
}

export default connect(mapStateToProp)(Question)