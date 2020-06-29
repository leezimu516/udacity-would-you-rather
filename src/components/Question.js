import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatPool, formatDate} from "../utils/helpers";

class Question extends Component {
    constructor() {
        super();
        this.state = {
            answer: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {dispatch, question, authedUserReducer} = this.props;
        const answer = this.state.answer;
        // console.log(question, authedUserReducer, answer)
        console.log(answer)
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
                    <img className="question-column-left"
                         src={avatar}
                         alt={`Avatar of ${name}`}
                        // className='avatar'
                    />
                    <form className="question-column-right" style={{backgroundColor: '#ddd'}}
                          onChange={this.onChangeValue}>
                        <h2>Would You Rather ...</h2>

                        <div>
                            <input type="radio" id="optionOne" name={id} value={optionOneText}/>
                            <label htmlFor={optionOneText}>{optionOneText}</label>
                        </div>
                        <div>
                            <input type="radio" id="optionTwo" name={id} value={optionTwoText}/>
                            <label htmlFor={optionTwoText}>{optionTwoText}</label>
                        </div>

                        {/*<div className='question-button'>*/}
                        <button id='submit-question' onClick={this.handleSubmit}>Submit</button>
                        {/*</div>*/}
                    </form>
                </div>
            </div>


        )
    }
}

function mapStateToProp({authedUserReducer, usersReducer, questionsReducer}, {id}) {
    const question = questionsReducer[id];

    return {
        authedUserReducer,
        question: formatPool(question, usersReducer),

    }
}

export default connect(mapStateToProp)(Question)