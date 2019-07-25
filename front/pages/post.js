import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { LOAD_SINGLE_POST_REQUEST } from '../reducers/post';

const Post = ({ id }) => {
	const category = useSelector(state => state.post.loadPostCategory);
	const singlePost = useSelector(state => state.post.singlePost);
	const dispatch = useDispatch();

	// method

	useEffect(() => {
		dispatch({
			type: LOAD_SINGLE_POST_REQUEST,
			category,
			id,
		});
	}, []);

	return (
		<>
			<Helmet
				title={singlePost.title}
				description={singlePost.description}
				meta={[
					{ name: 'description' , content: singlePost.content },
				]}
			/>
			<h1>{category}</h1>
			<div>{id}번 글</div>

			<div>제목 : {singlePost.title}</div>
			<div>내용 : {singlePost.content}</div>
		</>
	);
};

Post.getInitialProps = async (context) => {
	return { id: parseInt(context.query.id, 10) };
}

export default Post;