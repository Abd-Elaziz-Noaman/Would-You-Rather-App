import React, {Component} from 'react'
import {connect} from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import NotFound from './notFound'
import { formatDate } from '../helper'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'

class UnansweredQuestion extends Component {
   
    state = {
        selectedOption: ''
      };
    
    radioSelected = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    handleSubmit = (id, e) => {
        // const answer = this.form.answer.value
        console.log("Answer", )
        
        e.preventDefault()

        if (this.state.selectedOption !== '') {
            this.props.dispatch(handleAnswerQuestion(id, this.state.selectedOption))
        } else {
            alert("You must choose an answer")
        }
    };

    render() {
        const { questionn, author } = this.props
        // const questionId = questionn.map((id) => question[id])
        console.log("testtt", questionn)

        if (questionn === null) {
            return <NotFound />
        };

        const {id, timestamp, optionOne, optionTwo} = questionn;
        
        const { name, avatarURL } = author
        console.log("name", name)
        return (
            <div>
                <Nav />
                <div id="unans-qontainer">
                    <div className="q-info">
                        <h2>{name} asks:</h2>
                        <img className="u-img" src={avatarURL} alt="user-Avater" />
                        <br/>
                        <small>{formatDate(timestamp)}</small>
                    </div>
                    <div className="q-info">
                        <form onSubmit={(e) => this.handleSubmit(id, e)} > <h2>Would You Rather...</h2>
                            <input
                            type='radio'
                            id='optionOne'
                            value='optionOne'
                            name='answer' 
                            onChange={this.radioSelected}
                            />
                            <label htmlFor='optionOne' >{optionOne.text}</label> <br/> <br/>

                            <input 
                            type='radio'
                            id='optionTwo'
                            value='optionTwo'
                            name='answer' 
                            onChange={this.radioSelected}
                            />
                            <label htmlFor='optionTwo' >{optionTwo.text}</label>
                            <br />

                            <button id="answer-btn" type="submit">Answer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({question, users, authedUser}, {id}) {
    console.log("authedUser", authedUser)
    console.log("Qid", id)
    const questionn = question[id]
    // const questionn = question && Object.values(question)
    console.log("qestion", question)
    console.log("ansQ", questionn)

    return {
        questionn: questionn ? questionn : null,
        author: questionn ? users[questionn.author] : null,
        question
    }
};

export default withRouter(connect(mapStateToProps)(UnansweredQuestion));