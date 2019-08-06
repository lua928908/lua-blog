import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Inspiration = () => {
	const dispatch = useDispatch();
	const category = 'inspiration';

	const listData = useSelector(state => state.post.showPosts);

	return (
		<>
			<h1>Inspiration</h1>
			<PostList listData={listData} category={category}>

			</PostList>
		</>
	);
};

Inspiration.getInitialProps = (context) => {
	context.store.dispatch({
		type: LOAD_POST_REQUEST,
		category: 'inspiration',
	});
};

export default Inspiration;