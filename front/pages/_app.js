import React, { useEffect } from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga'; // next, getInitialProps SSR을 위해필요
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Helmet from 'react-helmet';
import { Container } from 'next/app';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers/index';
import rootSaga from '../sagas';
import axios from 'axios';
import { CHECK_LOGIN_REQUEST } from '../reducers/user';

const luaBlog = ({ Component, store, pageProps }) => {
	
	return (
		<>
			<Container>
				<Provider store={store}>
					<Helmet
						title='Lua - Blog'
						htmlAttributes={{ lang: 'ko' }}
						meta={[
							{ charset: 'UTF-8' },
							{ name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover' },
							{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
							{ name: 'description', content: 'Lua React Blog' },
							{ name: 'og:title', content: 'Lua React Blog' },
							{ name: 'og:description', content: 'Lua React Blog' },
							{ property: 'og:type', content: 'website' },
							{ property: 'og:image', content: 'http://where-code.com/favicon.ico' },
						]}
						link={[
							{ rel: 'shortcut icon', href: '/favicon.ico' },
							{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.13.2/dist/react-draft-wysiwyg.css' },
							{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.min.css' },
						]}
						script={[
							{ src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.min.js' },
						]}
					/>

					<AppLayout>
						<Component {...pageProps} />
					</AppLayout>
				</Provider>
			</Container>
		</>
	);
};


// next+express - wildcard, SSR을 위해 필요
luaBlog.getInitialProps = async (context) => {
	const { ctx, Component } = context; // context는 next가 제공
	let pageProps = {};

	const state = ctx.store.getState();
	const cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // 서버가 아닌경우 req가 없어서 에러생길 수 있음

	if( ctx.isServer && cookie ){ // 서버환경이고 쿠키가 있는경우
		axios.defaults.headers.Cookie = cookie;
	}
	if(!state.user.userInfo){
		ctx.store.dispatch({
			type: CHECK_LOGIN_REQUEST,
		});
	}
	
	if( context.Component.getInitialProps ){
		// 각 컴포넌트가 return한 값이 pageProps에 담긴다.
		pageProps = await context.Component.getInitialProps(ctx) || {}; // component에 getInitialProps를 설정한다.
	}

    return { pageProps };
};

// redux, redux-saga를 위해 필요
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
	store.sagaTask = sagaMiddleware.run(rootSaga); // next에서 SSR을 할때 store.sagaTask를 필요로함
	return store;
};


export default withRedux(configureStore)(withReduxSaga(luaBlog));