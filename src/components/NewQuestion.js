import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {handleAddQuestion} from "../actions/questions";

class NewQuestion extends Component {
    constructor() {
        super();
        this.optionOneInput = React.createRef();
        this.optionTwoInput = React.createRef();
    }

    handleAdd = (e) => {

        const {dispatch, authedUserReducer} = this.props;
        const optionOneText = this.optionOneInput.current.value;
        const optionTwoText = this.optionTwoInput.current.value;
        const author = authedUserReducer;

        console.log(author, optionOneText, optionTwoText)
        dispatch(handleAddQuestion({ author, optionOneText, optionTwoText }))
    };
    render() {
        return (
            <div className='question'>
                <div className='question-row'>
                    <h2>New Question</h2>
                </div>


                <div className='question-column'>
                    <h4 className='divider'/>
                    <form className="" onChange={this.onChangeValue}>
                        <h5 id='newquestion-header'>complete the question</h5>
                        <h3 id='newquestion-header'>Would You Rather ...</h3>
                        <div>
                            <textarea type="text" id="optionOne" placeholder='optionOne' ref={this.optionOneInput}/>
                        </div>

                        <h4 className='divider'><span>OR</span></h4>
                        <div>
                            <textarea type="text" id="optionTwo" placeholder='optionTwo' ref={this.optionTwoInput}/>
                        </div>

                        <div className='question-button'>
                            <Link to='/'>
                                <button className='submit-question' id='add-question' onClick={this.handleAdd}>Submit</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProp({authedUserReducer}) {
    return {
        authedUserReducer,

    }
}

export default connect(mapStateToProp)(NewQuestion)