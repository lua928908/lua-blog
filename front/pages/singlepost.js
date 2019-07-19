import React from 'react';

const SinglePost = ({ id }) => {
	return (
		<>
			<h1>싱글 포스트</h1>
			<div>받은 쿼리{id}</div>
		</>
	);
};

SinglePost.getInitialProps = async (context) => {
	console.log(context.query);
	return { id: parseInt(context.query.id, 10) };
}

export default SinglePost;