import React, {Component} from "react";
import {connect} from 'react-redux';
import Question from "./Question";
import {setAuthedUser} from "../actions/authedUser";
import Poll from "./Poll";
import PrivateRoute from "./PrivateRoute";

class Login extends Component {

    constructor() {
        super()
        this.state = {
            loginName: ''
        }
    }



    componentWillMount() {
        // const {dispatch} = this.props
        // console.log('logout')
        // dispatch(setAuthedUser(null))
    }

    login = (e, from) => {
        // e.preventDefault();
        const {dispatch} = this.props;
        const user = this.state.loginName
        dispatch(setAuthedUser(user))

        console.log(from, user)
        // this.props.history.push(from.pathname)
        if (from !== null) {
            // console.log(from.from.pathname)
            // this.props.history.push('/leaderboard')
            // this.props.history.push('/questions/am8ehyc8byjqgar0jgpub9')
            // this.props.history.push(from.from.pathname)
            // this.props.history.push({
            //     pathname: from.from.pathname,
            //     state: {isAuthed: true}
            // })

        } else {
            // this.props.history.push('/')
        }

    }


    login = () => {
        // e.preventDefault();
        const {dispatch} = this.props;
        const user = this.state.loginName
        dispatch(setAuthedUser(user))

    }


    handleLoginChange = (e) => {
        this.setState({
            loginName: e.target.value
        })
    }

    render() {
        const {users, userIds} = this.props;
        // const {from} = this.props.location.state
        // console.log(this.props.location.state)
        console.log(users, userIds, this.props);

        return (

            <form className='login'>

                <h3>Sign In</h3>

                <select onChange={this.handleLoginChange}>
                    <option>-------------------</option>
                    {
                        userIds.map((id) => (
                            <option key={id} value={id}>
                                {users[id].name}
                            </option>
                        ))
                    }
                </select>


                <br/>
                {/*<button type="submit" className="submit-question" onClick={(e) => this.login(e, this.props.location.state)}>Sign in</button>*/}
                <button type="submit" className="submit-question" onClick={this.login}>Sign in</button>
            </form>
        );
    }
}

function mapStateToProps({authedUserReducer, usersReducer, questionsReducer}) {

    return {
        userIds: Object.keys(usersReducer),
        users: usersReducer
    }

}

export default connect(mapStateToProps)(Login)