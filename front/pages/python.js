import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Python = () => {
	const dispatch = useDispatch();
	const category = 'python';

	const listData = useSelector(state => state.post.showPosts);

	return (
		<>
			<h1>{category}</h1>
			<PostList listData={listData} category={category}>

			</PostList>
		</>
	);
};

Python.getInitialProps = (context) => {

	context.store.dispatch({
		type: LOAD_POST_REQUEST,
		category: 'Python',
	});
};

export default Python;