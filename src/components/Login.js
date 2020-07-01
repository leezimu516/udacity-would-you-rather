import React, {Component} from "react";
import {connect} from 'react-redux';
import Question from "./Question";
import {setAuthedUser} from "../actions/authedUser";

class Login extends Component {

    constructor() {
        super()
        this.state = {
            loginName: ''
        }
    }

    componentWillMount() {
        const {dispatch} = this.props
        console.log('logout')
        dispatch(setAuthedUser(''))
    }

    login = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        const user = this.state.loginName
        dispatch(setAuthedUser(user))
        this.props.history.push('/')
    }


    handleLoginChange = (e) => {
        this.setState({
            loginName: e.target.value
        })
    }

    render() {
        const {users, userIds} = this.props;
        console.log(users, userIds);

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