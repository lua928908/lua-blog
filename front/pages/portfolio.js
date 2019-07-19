import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Portfolio = () => {
	const dispatch = useDispatch();

	const listData = useSelector(state => state.post.showPosts);
	const category = 'portfolio';

	useEffect(() => {
		dispatch({
			type: LOAD_POST_REQUEST,
			category,
		})
	}, []);

	return (
		<>
			<h1>포트폴리오</h1>
			<PostList listData={listData} category={category}>

			</PostList>
		</>
	);
};

export default Portfolio;