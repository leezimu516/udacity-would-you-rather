import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatPool} from "../utils/helpers";
import {Link} from 'react-router-dom'
import {handleSumbitAnswer} from "../actions/questions";

class Question extends Component {
    constructor() {
        super();
        this.state = {
            answer: ""
        };
    }

    handleSubmit = (e) => {
        const {dispatch, question, authedUserReducer} = this.props;
        const answer = this.state.answer;
        const qid = question.id;
        const authedUser = authedUserReducer;
        if (answer === '') {
            alert('Select at least one')
        } else {
            dispatch(handleSumbitAnswer({authedUser, qid, answer}))

        }

    }

    onChangeValue = (e) => {
        this.setState({answer: e.target.value});
        console.log(e.target.value)

    }


    render() {

        const {question, id, detail} = this.props;
        console.log('question: ', question, id, detail);
        if (question === null) {
            return (
                <div>
                    <p>this question doesnt exist</p>
                </div>

            )
        }

        const {name, optionOneText, optionTwoText, avatar,} = question;
        console.log(id)
        return (

            <div className='question'>
                {id === undefined && <div>
                    <p>this question doesnt exist</p>
                </div>}
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


                    {detail ?

                        <form className="question-column-right"
                              onChange={this.onChangeValue}>
                            <h2>Would You Rather ...</h2>


                            <div>
                                <div>
                                    <input type="radio" id="optionOne" name={id} value='optionOne'/>
                                    <label htmlFor={optionOneText}>{optionOneText}</label>
                                </div>
                                <div>
                                    <input type="radio" id="optionTwo" name={id} value='optionTwo'/>
                                    <label htmlFor={optionTwoText}>{optionTwoText}</label>
                                </div>

                            </div>


                            <div className='question-button'>
                                <Link to={
                                    {
                                        pathname: `/questions/${id}`,
                                    }}>
                                    <button className='submit-question' onClick={this.handleSubmit}>View
                                    Poll
                                </button>
                                </Link>

                            </div>

                        </form>
                        :
                        <form className="question-column-right"
                              onChange={this.onChangeValue}>
                            <h2>Would You Rather ...</h2>


                            <div>
                                ...{optionOneText} ...
                            </div>
                            <div className='question-button'>
                                <Link to={
                                    {
                                        pathname: `/questions/${id}`,
                                    }}>
                                    <button className='submit-question'>View Poll</button>
                                </Link>

                            </div>
                        </form>


                    }


                </div>
            </div>


        )
    }
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, {id}) {
    if (id !== undefined) {
        const question = questionsReducer[id];
        return {
            authedUserReducer,
            question: formatPool(question, usersReducer),

        }
    } else {
        return {
            authedUserReducer,
            question: null,

        }
    }
}

export default connect(mapStateToProp)(Question)