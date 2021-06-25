import React, {Component} from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink, Link, Redirect, withRouter } from 'react-router-dom'

class Nav extends Component {
    handleLogout = (e) => {
        const authedUser = this.props
        e.preventDefault()
        this.props.onLogout(null)
        return (
            <Redirect to="/" />
        )
    };

    render() {
        const {user} = this.props;
        const {name, avatarURL} = user;
        return (
            <div>
                <nav className="nav">
                    <br/>
                    <ul>
                        <li className="nav-li">
                            <NavLink to='/' exact activeClassName='active' className="main-nav">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-li">
                            <NavLink to='/add' exact activeClassName='active' className="main-nav">
                                New Question
                            </NavLink>
                        </li>
                        <li className="nav-li">
                            <NavLink to='/leaderboard' exact activeClassName='active' className="main-nav">
                                Leader Board
                            </NavLink>
                        </li>
                        <li className="nav-li">
                            <img style={{display:"inline"}} id="nav-img" src={avatarURL} alt="user-Avatar" />
                            <h6 style={{display:"inline"}}>{name}</h6>
                        </li>
                        <li className="nav-li">
                            <Link to='/'>
                                <button onClick={this.handleLogout}>Logout</button>
                            </Link>
                        </li>
                        {/* {
                            loggedIn
                            ? <li>
                                <NavLink to='/login' exact activeClassName='active'>
                                <div className="nav-user">
                                Logout
                                <img
                                    src={avatar}
                                    alt={`Avatar of ${authedUser}`}
                                    className='nav-avatar'
                                />
                                {authedUser}
                                </div>
                                </NavLink>
                            </li>
                            : <li>
                                <NavLink to='/login' exact activeClassName='active'>
                                Login
                                </NavLink>
                            </li>
                        } */}
                    </ul>
                    <br/>
                </nav>
                <hr/>
            </div>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    return {
        user: users[authedUser],
        authedUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onLogout: () => {
        dispatch(setAuthedUser(null))
      }
    }
  }

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav));


