import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
	SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
	LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
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
	return axios.get('/user/logout', {}, {
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
	yield call();
}
function* watchSignup(){
	yield takeEvery(SIGNUP_REQUEST, signUp);
}

export default function* postSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
  ]);
}