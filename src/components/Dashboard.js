import React, {Component} from 'react';
import {connect} from 'react-redux'
import Question from "./Question";


class Dashboard extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h3 className='center'>Questions</h3>
                <ul className='dashboard-list'>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>

            </div>


        )

    }
}

function mapStateToProps({ questionsReducer }) {
    return {
        questionIds: Object.keys(questionsReducer).sort((a,b) => questionsReducer[b].timestamp - questionsReducer[a].timestamp)
        // questionIds: questionsReducer
    }
}

export default connect(mapStateToProps)(Dashboard)