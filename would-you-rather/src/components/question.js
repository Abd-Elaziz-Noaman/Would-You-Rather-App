import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../helper'

class Question extends Component {
    render() {
        const { questionn, author } = this.props
        const { id, timestamp, optionOne} = questionn
        const { name, avatarURL } = author

        console.log("avatar", avatarURL)
        
        return (
            <div id="q-container">
                <h1>{name} asks:</h1>
                <div className="q-info">
                    <img className="u-img" src={avatarURL} alt="user-Avatar" />
                    <br/>
                    <small style={{color:"whiteSmoke"}}>{formatDate(timestamp)}</small>
                </div>
                <div className="q-info">
                    <h2>Would you rather</h2>
                    <h3>
                        <small>{optionOne && optionOne.text}...? <br/> or</small>
                    </h3>
                    <Link to={`/question/${id}`}>
                        <button id="q-btn">Viw Poll</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({question, users, authedUser}, {id}) {
    const questionn = question[id]
    console.log("actQuestion", questionn)
    authedUser = users[authedUser]
    return {
        questionn: questionn ? questionn : null,
        author: questionn ? users[questionn.author] : null,
        authedUser
    }
};


export default withRouter(connect(mapStateToProps)(Question));