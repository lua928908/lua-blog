import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Portfolio = () => {
	const dispatch = useDispatch();

	const listData = useSelector(state => state.post.showPosts);

	useEffect(() => {
		dispatch({
			type: LOAD_POST_REQUEST,
			category: 'portfolio',
		})
	}, []);

	return (
		<>
			<h1>포트폴리오</h1>
			<PostList listData={listData}>

			</PostList>
		</>
	);
};

export default Portfolio;