import { all, call, fork, put, takeEvery, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
	SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
	LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
	CHECK_LOGIN_REQUEST, CHECK_LOGIN_SUCCESS, CHECK_LOGIN_FAILURE,
	USER_FEEDBACK_REQUEST, USER_FEEDBACK_SUCCESS, USER_FEEDBACK_FAILURE,
} from '../reducers/user';

// 로그인
function loginAPI(loginData){
	return axios.post('/user/login', loginData, {
		withCredentials: true,
	});
}
function* login(action){
	try{
		const result = yield call(loginAPI, action.data);
		yield delay(1000);
		yield put({
			type: LOG_IN_SUCCESS,
			data: result.data,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: LOG_IN_FAILURE,
			error: e,
		});
	}
}
function* watchLogin(){
	yield takeEvery(LOG_IN_REQUEST, login);
}

// 로그아웃
function logoutAPI(){
	return axios.post('/user/logout', {}, {
		withCredentials: true,
	});
}
function* logout(){
	try{
		yield call(logoutAPI);
		yield put({
			type: LOGOUT_SUCCESS,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: LOGOUT_FAILURE,
			error: e,
		});
	}
}
function* watchLogout(){
	yield takeEvery(LOGOUT_REQUEST, logout);
}

// 회원가입
function signUpAPI(data){
	return axios.post('/user/', data);
}
function* signUp(action){
	try{
		yield call(signUpAPI, action.data);
		yield put({
			type: SIGNUP_SUCCESS,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: SIGNUP_FAILURE,
			error: e,
		});
	}
}
function* watchSignup(){
	yield takeEvery(SIGNUP_REQUEST, signUp);
}

// 로그인 유저정보 받아오기
function checkLoginAPI(){
	return axios.get('/user/', {
		withCredentials: true,
	});
}
function* checkLogin(){
	try{
		const result = yield call(checkLoginAPI);
		yield put({
			type: CHECK_LOGIN_SUCCESS,
			data: result.data,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: CHECK_LOGIN_FAILURE,
			error: e,
		});
	}
}
function* watchCheckLogin(){
	yield takeEvery(CHECK_LOGIN_REQUEST, checkLogin);
}

// 사용자 피드백 등록
function userFeedbackAPI(postData){
	return axios.post('/user/feedback', postData);
};
function* userFeedback(action){
	try{
		const result = yield call(userFeedbackAPI, action.data);
		yield delay(1000);
		yield put({
			type: USER_FEEDBACK_SUCCESS,
			data: result.data,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: USER_FEEDBACK_FAILURE,
			error: e,
		});
	}
};
function* watchUserFeedback(){
	yield takeEvery(USER_FEEDBACK_REQUEST, userFeedback);
};

export default function* postSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchCheckLogin),
    fork(watchUserFeedback),
  ]);
}