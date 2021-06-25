import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './unansweredQuestion';
import AnsweredQuestion from './answeredQuestion';

class QuestionPage extends Component {
	render() {
		const { autherUserAnsweres, match } = this.props;
		const id = match.params.id;
		const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;

		return (
			<Fragment>
				{/* <h2 className="text-center my-3">
					<small>Would You Rather...</small>
				</h2> */}
				{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
			</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, users, question }) {
	console.log("autttttttedU", authedUser)
	const autherUserAnsweres = users[authedUser].answers;

	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(QuestionPage);