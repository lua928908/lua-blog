import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers/index';
import rootSaga from '../sagas';

const luaBlog = ({ Component, store }) => {
	return (
		<>
			<Provider store={store}>
				<Head>
					<title>Lua - Blog</title>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.13.2/dist/react-draft-wysiwyg.css" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
				</Head>

				<AppLayout>
					<Component children={Component} />
				</AppLayout>
			</Provider>
		</>
	);
};

const configureStore = (initialState, options) => { // 02. next-redux-wrapper모듈이 root컴포넌트가 store를 prop로 받을 수 있게 해준다.
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer = process.env.NODE_ENV === 'production'
	? compose(applyMiddleware(...middlewares))
	: compose(
		applyMiddleware(...middlewares),
		!options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
	);
	const store = createStore(reducer, initialState, enhancer); // 01. redux모듈이 사용자가 만든 reducer를 토대로 store를 생성
	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};


export default withRedux(configureStore)(withReduxSaga(luaBlog));