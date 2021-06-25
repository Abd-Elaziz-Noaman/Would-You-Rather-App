import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import UserStats from './userStates'
import Nav from './Nav'

class LeaderBoard extends Component {
	render() {
		return (
			<Fragment>
                <Nav />
				<div>
                    <h2 style={{textAlign:"center", color:"#282c34"}}>
                        <small>LeaderBoard</small>
                    </h2>
                    {this.props.userIDs.map((id) => (
                        <UserStats key={id} id={id} />
                    ))}
                </div>
			</Fragment>
		);
	}
}

function mapStateToProps({ users }) {
	//sort UserIDs by the score for each user, desc
	const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
		const scoreA =
			Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreB =
			Object.keys(users[idB].answers).length + users[idB].questions.length;

		return scoreB - scoreA;
	});

	return {
		userIDs: sortedUserIDs
	};
}

export default connect(mapStateToProps)(LeaderBoard);