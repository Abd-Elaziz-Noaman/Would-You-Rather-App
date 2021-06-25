import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import Nav from './Nav'


class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        backToHome: false
    };

    handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === "optionOne") {
            
            this.setState({
                optionOne: value
            });
        } else {
            
            this.setState({
                optionTwo: value
            });
        }
    };

    handleSubmit = (e) => {
        const {dispatch} = this.props;
        const {optionOne, optionTwo} = this.state;

        e.preventDefault()

        this.setState({
            optionOne: '',
            optionTwo: '',
            backToHome: true
        },
        () => dispatch(handleAddQuestion(optionOne, optionTwo))
        );
    };

    render() {
        const {optionOne, optionTwo, backToHome} = this.state;

        if (backToHome === true) {
            return (
                <Redirect to="/" />
            )
        };
        return (
            <div>
                <Nav />
                <br/>
                <div id="nq-container">
                    <h2>
                        Would You Rather...
                    </h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="nq-form"
                            type="text"
                            name="optionOne"
                            value={optionOne}
                            onChange={this.handleInputChange}
                        />
                        <h2><small>OR</small></h2>
                        <input 
                            className="nq-form"
                            type="text"
                            name="optioneTwo"
                            value={optionTwo}
                            onChange={this.handleInputChange}
                        />
                        <br/>
                        <button
                            id="nq-btn"
                            type="submit"
                            disabled={ optionOne === '' || optionTwo === '' || optionOne === optionTwo }
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion);