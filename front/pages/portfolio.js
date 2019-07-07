import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import post from '../reducers/post';
import { LOAD_PORTFOLIO_REQUEST } from '../reducers/post';

const Portfolio = () => {
	const dispatch = useDispatch();

	const listData = useSelector(state => state.post.portfolioPost);

	useEffect(() => {
		dispatch({
			type: LOAD_PORTFOLIO_REQUEST,
		})
	}, [listData]);

	return (
		<>
			<h1>포트폴리오</h1>
			<PostList listData={listData}>

			</PostList>
		</>
	);
};

export default Portfolio;