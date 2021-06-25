import React, {Component} from 'react'
import { connect } from 'react-redux'
import NotFound from './notFound'
import { formatDate } from '../helper'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'


class AnsweredQuestion extends Component {
    render() {
        const {questionn, author, authedUser} = this.props;
        console.log("author", author)

        if (questionn === null) {
            return <NotFound />
        };

        const { timestamp, optionOne, optionTwo} = questionn
        const { name, avatarURL } = author
        const total_V = optionOne.votes.length + optionTwo.votes.length
        const optionOneProgress = Math.round((optionOne.votes.length / total_V) * 100)
        const optionTwoProgress = Math.round((optionTwo.votes.length / total_V) * 100)

        return (
            <div>
                <Nav />
                <div id="unans-qontainer">
                    <div className="q-info">
                        <h2>{name} asks:</h2>
                        <img className="u-img" src={avatarURL} alt="user-Avatar" />
                        <br/>
                        <small>{formatDate(timestamp)}</small>
                    </div>
                    <div className="q-info">
                        <ul>
                            <li>
                                {optionOne.text}
                                {optionOne.votes.includes(authedUser) ? (
                                    <span>
                                        &lt;-- Your choice
                                    </span>
                                ) : null }
                            </li>
                            <progress value={optionOneProgress} max="100"> {optionOneProgress}% </progress>
                            <h6>
                                Chosen by {optionOne.votes.length} out of {total_V} users
                            </h6>

                            <li>
                                {optionTwo.text}
                                {optionTwo.votes.includes(authedUser) ? (
                                    <span>
                                        &lt;-- Your choice
                                    </span>
                                ) : null }
                            </li>
                            <progress value={optionTwoProgress} max="100"> {optionTwoProgress}% </progress>
                            <h6>
                                Chosen by {optionTwo.votes.length} out of {total_V} users
                            </h6>
                        </ul>    
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users, question, authedUser}, {id}) {
    const questionn = question[id]
    console.log("Qid", id)                                 
    console.log("ansQ", questionn)
    console.log("questions", question)
    console.log("useeeeers", users)

    return {
        questionn: questionn ? questionn : null,                                //test
        author: questionn ? users[questionn.author]: null,
        authedUser
    }
};

export default withRouter(connect(mapStateToProps)(AnsweredQuestion));
