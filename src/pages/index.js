import React from 'react';
import { Link } from 'gatsby';
import { getUser, isLoggedIn } from '../services/auth';

import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<h1>Hi {isLoggedIn() ? getUser().name : 'people'}</h1>
			<p>
				{isLoggedIn() ? (
					<div>
						You are logged in, so check your <Link to="/app/profile">profile</Link>
					</div>
				) : (
					<div>
						You should <Link to="/app/login">log in</Link> to see restricted content
					</div>
				)}
			</p>
		</Layout>
	);
};

export default IndexPage;
