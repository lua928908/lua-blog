import { all, fork, takeLatest, takeEvery, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
} from '../reducers/post';


// 게시물 작성
function addPostAPI(postData){
	return axios.post(`/${postData.category}`, postData.data, {
		withCredentials: true,
	});
}
function* addPost(action){
	try{
		const result = yield call(addPostAPI, {
			category: action.category,
			data: action.data,
		});
		yield put({
			type: ADD_POST_SUCCESS,
			data: {
				category: action.category,
				data: result.data,
			},
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
function loadPostAPI(postCategory){
	return axios.get(`${postCategory}`);
};
function* loadPost(action){
	try{
		const result = yield call(loadPostAPI, action.category);
		yield put({
			type: LOAD_POST_SUCCESS,
			data: result.data,
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
    fork(watchLoadPost),
    fork(watchAddPost),
  ]);
}