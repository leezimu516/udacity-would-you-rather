import React, {Component} from 'react';
import {connect} from 'react-redux'
import Question from "./Question";
import {NavLink} from "react-router-dom";


class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            isAnswered: false
        }
    }
    handleAnswered = () => {
        this.setState({isAnswered: true})
    };

    handleUnAnswered = () => {
        this.setState({isAnswered: false})

    };

    render() {
        console.log(this.state.isAnswered)
        const {userUnAnsweredQuestionIds, userAnsweredQuestionIds} = this.props;
        return (
            <div>


                <nav className='nav-answer'>
                    <ul className='nav-ul'>
                    <li>
                        <NavLink to='/' exact activeClassName='active' className='btn' onClick={this.handleUnAnswered}>
                            Unanswered questions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' exact activeClassName='active' className='btn' onClick={this.handleAnswered}>
                            Answered question
                        </NavLink>
                    </li>
                    </ul>
                </nav>

                <ul className='dashboard-list'>

                    {this.state.isAnswered ?
                        userAnsweredQuestionIds.map((id) => (
                            <li key={id}>
                                <Question id={id} isPoll={true} detail={false}/>
                            </li>
                        )) :
                        userUnAnsweredQuestionIds.map((id) => (
                            <li key={id}>
                                <Question id={id} isPoll={false} isSubmit={false} detail={false}/>
                            </li>
                        ))
                    }
                </ul>

            </div>


        )

    }
}

function mapStateToProps({questionsReducer, authedUserReducer, usersReducer}) {
    if (authedUserReducer !== '') {
        const orderQuestions = (input) => (
            Object.keys(input).sort((a, b) => input[b].timestamp - input[a].timestamp)
        );


        const userAnsweredQuestionIdsRaw = Object.keys(usersReducer[authedUserReducer].answers);
        const questionIds =  orderQuestions(questionsReducer);

        const userUnAnsweredQuestionIds = questionIds.filter((id) => !(userAnsweredQuestionIdsRaw.includes(id)))
        const userAnsweredQuestionIds = questionIds.filter((id) => (userAnsweredQuestionIdsRaw.includes(id)))
        console.log('userAnsweredQuestionIds: ', userAnsweredQuestionIds, userUnAnsweredQuestionIds, questionIds)


        return {
            questionIds,
            userAnsweredQuestionIds,
            userUnAnsweredQuestionIds
        }
    } else {
        return {
            questionIds: [],
            userAnsweredQuestionIds:[],
            userUnAnsweredQuestionIds:[]
        }
    }

}

export default connect(mapStateToProps)(Dashboard)