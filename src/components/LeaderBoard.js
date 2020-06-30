import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import Question from "./Question";
import Rank from "./Rank";

class LeaderBoard extends Component {
    render() {
        const {users} = this.props;
        return (


            <ul className='dashboard-list'>
                {users.map((id) => (
                    <li key={id}>
                        <Rank id={id}/>
                    </li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps({authedUserReducer, usersReducer, questionsReducer}) {
    return {
        users: Object.keys(usersReducer).sort((a, b) => (
            Object.keys(usersReducer[b].answers).length + usersReducer[b].questions.length - Object.keys(usersReducer[a].answers).length - usersReducer[a].questions.length

        )),


    }


}

export default connect(mapStateToProps)(LeaderBoard)