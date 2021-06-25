import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<Fragment>
			<h1 style={{color:"#282c34"}} >ERROR 404</h1>
			<h1>
				<Link style={{textDecoration:"none", color:"#282c34"}} to="/">Return to Home Page</Link>
			</h1>
		</Fragment>
	);
}

export default NotFound;