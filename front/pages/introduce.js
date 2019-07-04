import React from 'react';
import PostList from '../components/PostList';
import { TEST_SAGA_REQUEST } from '../reducers/post';
import { useSelector, useDispatch } from 'react-redux';


const Introduce = () => {
	const dispatch = useDispatch();
	const testState = useSelector(state => state.user.test);

	const clickBtn = () => {
		console.log('dispatch');
		dispatch({
			type: TEST_SAGA_REQUEST,
		});
	}

	return (
		<>
			<h1>LUA 소개하기</h1>
			<button onClick={clickBtn} type="button">CLICK</button>
			<div>{testState}</div>
		</>
	);
};

export default Introduce;