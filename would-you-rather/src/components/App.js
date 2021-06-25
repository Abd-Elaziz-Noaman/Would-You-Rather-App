import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Root from './root'
import Home from './Home'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewQuestion from './newQuestion'
import QuestionPage from './questionPage'
import LeaderBoard from './leaderBoard'


class App extends Component {
  componentDidMount () {
    this.props.handleInitialData();
  };
  

  render() {
    const {authedUser} = this.props
    console.log("Props", this.props)
    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
            <Route 
              render={() => (
                <Root />
              )}
            />
          ): (
              <div>
                <Route exact path='/' render={() => (
                  <Home />
                )} />
                <Route exact path='/add'
                  render={() => (<NewQuestion />)}
                />
                <Route exact path='/leaderboard' 
                  render={() => (<LeaderBoard />)}
                />
                <Route exact path="/question/:id"
                  render={(props) => ( <QuestionPage {...props} /> )} />
              </div>
              )};          
        </div>

{/* (props) => (users[authedUser].answers.hasOwnProperty(id) ? <AnsweredQuestion {...props} id={id} /> : <UnansweredQuestion {...props} id={id} />) */}

        {/* <Route exact path='/'
          render={() => (<Root />)}
        /> */}
      </Router>
    );
  }
};

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps, { handleInitialData })(App); //test
