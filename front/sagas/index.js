import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import post from './post';
import { backServerURL } from '../config/config';

axios.defaults.baseURL = `${backServerURL}/api`;

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(post),
  ]);
}