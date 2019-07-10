import { all, fork, takeLatest, takeEvery, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	TEST_SAGA_REQUEST, TEST_SAGA_SUCCESS, TEST_SAGA_FAILURE,
	LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
} from '../reducers/post';

// test saga
function testAPI(){
	return 9289;
}
function* testCallback(){
	try{
		const result = call(testAPI);
		yield put({
			type: TEST_SAGA_SUCCESS,
			data: result,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: TEST_SAGA_FAILURE,
			error: e,
		});
	}
}
function* watchTestSaga(){
	yield takeEvery(TEST_SAGA_REQUEST, testCallback);
}


// 게시물 쓰기
function addPostAPI(data){
	return data;
}
function* addPost(action){
	try{
		const result = yield call(addPostAPI, action.data);
		console.log(result);
		yield put({
			type: ADD_POST_SUCCESS,
			data: result,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: ADD_POST_FAILURE,
			error: e,
		});
	}
}
function* watchAddPost(){
	yield takeLatest(ADD_POST_REQUEST, addPost);
}


// 게시물 가져오기
function loadPostAPI(data){
	return 8246;
};
function* loadPost(action){
	try{
		const result = yield call(loadPostAPI, action.data);
		yield put({
			type: LOAD_POST_SUCCESS,
			data: result,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: LOAD_POST_FAILURE,
			error: e,
		});
	}
};
function* watchLoadPost(){
	yield takeLatest(LOAD_POST_REQUEST, loadPost);
};

export default function* postSaga() {
  yield all([
    fork(watchTestSaga),
    fork(watchLoadPost),
    fork(watchAddPost),
  ]);
}