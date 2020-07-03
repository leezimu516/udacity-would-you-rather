import React, {Component} from 'react'
import {connect} from 'react-redux'

class Rank extends Component {
    render() {
        const {id, usersReducer} = this.props;
        console.log(id, usersReducer);

        const user = usersReducer[id];
        const name = user.name;
        const avatar = user.avatarURL;
        const questionsLength = user.questions.length;
        const answersLength = Object.keys(user.answers).length;
        const total = questionsLength + answersLength
        console.log(id, avatar, questionsLength, answersLength);
        return (
            <div className='leaderboard'>
                <div className='leaderboard-avatar'>
                    <img className="avatar"
                     src={avatar}
                     alt={`Avatar of ${name}`}
                />
                </div>
                <div className="vl"/>
                <div className='leaderboard-detail'>
                    <h2>{name}</h2>
                    <span>Answered questions: {answersLength}</span>
                    <hr/>
                    <span>Created questions: {questionsLength}</span>

                </div>
                <div className="vl"/>
                <div className='leaderboard-score'>
                    <div className='score-text'>Score</div>
                    <div className='score-number'>
                        <div className='score-circle'>{total}</div>
                        </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUserReducer, usersReducer, questionsReducer}) {
    return {
        usersReducer
    }

}

export default connect(mapStateToProps)(Rank)