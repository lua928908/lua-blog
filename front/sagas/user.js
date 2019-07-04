import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	TEST_SAGA_REQUEST, TEST_SAGA_SUCCESS, TEST_SAGA_FAILURE,
} from '../reducers/user';


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

export default function* postSaga() {
  yield all([
    fork(watchTestSaga),
  ]);
}