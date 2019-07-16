import { all, fork, takeLatest, takeEvery, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
} from '../reducers/post';


// 게시물 쓰기
function addPostAPI(postData){
	return axios.post(`${postData.category}`, postData);
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
    fork(watchLoadPost),
    fork(watchAddPost),
  ]);
}