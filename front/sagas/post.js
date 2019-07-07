import { all, fork, takeLatest, takeEvery, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	TEST_SAGA_REQUEST, TEST_SAGA_SUCCESS, TEST_SAGA_FAILURE,
	LOAD_PORTFOLIO_REQUEST, LOAD_PORTFOLIO_SUCCESS, LOAD_PORTFOLIO_FAILURE
} from '../reducers/post';

// test saga
function testAPI(){
	return 9289;
}
function* testCallback(){
	const result = call(testAPI);
	try{
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
	yield call();
}
function* watchTestSaga(){
	yield takeEvery(TEST_SAGA_REQUEST, testCallback);
}

// 포트폴리오 게시물 가져오기
function loadPortfolioAPI(data){
	return 8246;
}
function* loadPortfolio(action){
	const result = yield call(loadPortfolioAPI, action.data);
	try{
		yield put({
			type: LOAD_PORTFOLIO_SUCCESS,
			data: result,
		});
	}catch(e){
		console.error(e);
		yield put({
			type: LOAD_PORTFOLIO_FAILURE,
			error: e,
		});
	}
	yield call();
}
function* watchLoadPortfolioPost(){
	yield takeLatest(LOAD_PORTFOLIO_REQUEST, loadPortfolio);
}

export default function* postSaga() {
  yield all([
    fork(watchTestSaga),
    fork(watchLoadPortfolioPost),
  ]);
}