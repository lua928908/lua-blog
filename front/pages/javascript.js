import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Javascript = () => {
	const dispatch = useDispatch();
	const category = 'javascript';

	const listData = useSelector(state => state.post.showPosts);

	return (
		<>
			<h1>javascript</h1>
			<PostList listData={listData} category={category}>

			</PostList>
		</>
	);
};

Javascript.getInitialProps = (context) => {

	context.store.dispatch({
		type: LOAD_POST_REQUEST,
		category: 'javascript',
	});
};

export default Javascript;