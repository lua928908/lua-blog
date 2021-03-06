import { all, fork, takeLatest, takeEvery, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	LOAD_SINGLE_POST_REQUEST, LOAD_SINGLE_POST_SUCCESS, LOAD_SINGLE_POST_FAILURE,
	LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
	UN_LIKE_POST_REQUEST, UN_LIKE_POST_SUCCESS, UN_LIKE_POST_FAILURE,
} from '../reducers/post';


// 게시물 작성
function addPostAPI(postData){
	return axios.post('/post', postData.data, {
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
	return axios.post('/post/find', {
		category: postCategory,
	});
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

// 한개의 게시물 가져오기
function loadSinglePostAPI(postData){
	return axios.get(`/post/${postData.id}`, {
	});
};
function* loadSinglePost(action){
	try{
		const result = yield call(loadSinglePostAPI, {
			category: action.category,
			id: action.id,
		});
		yield put({
			type: LOAD_SINGLE_POST_SUCCESS,
			data: result.data,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: LOAD_SINGLE_POST_FAILURE,
			error: e,
		});
	}
};
function* watchLoadSinglePost(){
	yield takeLatest(LOAD_SINGLE_POST_REQUEST, loadSinglePost);
};

// 게시글 좋아요
function likePostAPI(postId){
	return axios.post(`/post/${postId}/like`, {}, {
		withCredentials: true,
	});
};
function* likePost(action){
	try{
		const result = yield call(likePostAPI, action.data);
		yield put({
			type: LIKE_POST_SUCCESS,
			data: {
				userId: result.data.userId
			}
		});
	}catch(e){
		console.error(e);
		yield put({
			type: LIKE_POST_FAILURE,
			error: e,
		});
	}
};
function* watchLikePost(){
	yield takeLatest(LIKE_POST_REQUEST, likePost);
};

// 게시글 좋아요 취소
function unLikePostAPI(postId){
	return axios.delete(`/post/${postId}/like`, {
		withCredentials: true,
	});
};
function* unLikePost(action){
	try{
		const result = yield call(unLikePostAPI, action.data);
		yield put({
			type: UN_LIKE_POST_SUCCESS,
			userId: result.data.userId,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: UN_LIKE_POST_FAILURE,
			error: e,
		});
	}
};
function* watchUnLikePost(){
	yield takeLatest(UN_LIKE_POST_REQUEST, unLikePost);
};

export default function* postSaga() {
  yield all([
	fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchLoadSinglePost),
    fork(watchLikePost),
    fork(watchUnLikePost),
  ]);
}