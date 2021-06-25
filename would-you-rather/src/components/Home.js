import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import { setAuthedUser } from '../actions/authedUser'
import Nav from './Nav'
// import Question from './question'
import QuestionsList from './questionsList'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    state={
        target: ''
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            target: e.target.name
        })
    }

    render() {
        const {unansweredQuestionIds, answeredQuestionIds} = this.props;
        const {target} = this.state;
        console.log("Q",this.props)
        return (
            <div id="home-page">
                <br/>
                <Nav />
                <Fragment>
                    <section>
                        <button className="btn" onClick={this.handleClick} name="unanswered">Unanswered Questions</button>
                        <button className="btn" onClick={this.handleClick} name="answered">Answered Questions</button>
                    </section>

                    {
                        target && (target === "answered") ? (
                            <QuestionsList
                                idList={answeredQuestionIds}
                                emptyListNote="No Answered Questions yet! What are you waiting for???"
                            />
                        ) : (
                            <QuestionsList
                                idList={unansweredQuestionIds}
                                emptyListNote="No more Unswered Questions! Let's create a new one! "
                            />
                        )
                    }
			    </Fragment>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, question}) {
    console.log("QQ",question)
    console.log("UU",users)
    console.log("AA",authedUser)
    const answeredQuestionIds = question && (Object.keys(question)
        .filter((id) => users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => question[b].timestamp - question[a].timestamp))

    const unansweredQuestionIds = question && (Object.keys(question)
        .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => question[b].timestamp - question[a].timestamp))

    return {
        answeredQuestionIds,
        unansweredQuestionIds
    }
};

export default withRouter (connect(mapStateToProps)(Home));