import React, {Component} from 'react'
import '../App.css'
import {users} from '../_DATA'
import signin_img from '../image/signin.svg'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class Root extends Component {
    state={
        selectedUser: null
    }

    onSelectUser = (user) => {
        console.log(user.target.value)
        this.setState({
            selectedUser: user.target.value
        })
    }

    onSignIn = () => {
        if (this.state.selectedUser) {
            this.props.dispatch(setAuthedUser(this.state.selectedUser))
            // this.props.history.push('/')
        }
    }
    render() {
        const usersList = Object.values(users)
        console.log('users', usersList)
        console.log("props", this.props)
        return (
            <div id="root-page">
                <br/>
                <div className="nav">
                    <br/>
                    <ul>
                        <li><a href="/" className="root-nav">Home</a></li>
                        <li><a href="/add" className="root-nav">New Question</a></li>
                        <li><a href="/leaderboard" className="root-nav">Leader Board</a></li>
                    </ul>
                    <br/>
                </div>
                <hr/>
                <div className="container">
                    <section id="p-signin">
                        <br/>
                        <h1>Would You Rather App</h1>
                        <span>Please sign in to continue</span>
                        <br/>
                        <br/>
                    </section>
                    
                    <section id="s-signin">
                        <br/>
                        <br/>
                        <img src={signin_img} alt="" />
                        <h1>Sign in</h1>
                        <select onChange={this.onSelectUser} name="users" id="select_user">
                            <option disabled selected hidden>Select User</option>
                            {usersList && usersList.map((user) => {
                                return (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            })}
                        </select>
                        
                        <button onClick={this.onSignIn}>Sign In</button>
                        
                        <br/>
                        <br/>
                        <br/>

                    </section>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}

function mapStateToProps ({dispatch}) {
    return {
        dispatch
    }
};

// const mapDispatchToProps = (dispatch) => { return {signIn: (creds) => dispatch(setAuthedUser(creds)), }; };

export default withRouter (connect(mapStateToProps)(Root));